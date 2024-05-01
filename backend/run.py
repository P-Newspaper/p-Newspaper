# from app import create_app

# app = create_app()

# if __name__ == "__main__":
#     app.run(host='0.0.0.0', port=5001, debug=True)
import os
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_utils.types import TSVectorType
from sqlalchemy import func
from flask_cors import cross_origin, CORS
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

class Config:
    openai_api_key = os.environ.get('OPENAI_API_KEY')


def get_openai_client():
    """Retrieve an OpenAI client configured with the API key from app config."""
    openai_api_key = Config.openai_api_key
    client = OpenAI(api_key=openai_api_key)
    return client
                                                            

def create_prompt(news_articles, user_selected_interests, user_typed_interests):
    """Creates ChatGPT prompt used to filter articles: input are all of the articles and 
      user's typed and selected interests, output is a list of most relevant articles."""
    prompt = "Here is a list of news headlines and summaries:" 
    for article in news_articles:
        print(article)
        prompt += "\n" + article['title'] + ": " + article['summary'] + "\n" + article['url'] + "\n" + "Published: " + article['date'] + "\n"
    prompt += "\nHere are the user's previously selected interests: "
    prompt += "\n" + ", ".join(user_selected_interests)
    prompt += "\nHere is a description of what the user wants to read about today: "
    prompt += ", ".join(user_typed_interests)
    print(prompt)
    prompt += '\nOutput the headlines, summaries, published dates, and URLs that are most relevant to these interests, in order of relevance. Display the results in the following format, with the correct information added where it says to insert: [{"title":"insert title","date":"insert date","summary":"insert summary","url":"insert url here"}, {insert other articles in the same format}]. Do not output anything else.'
    return prompt
 

def filter_news(news_articles, user_selected_interests, user_typed_interests):
    """Creates a prompt with news articles and user's interests, and returns ChatGPT's response
    filtering for the most relevant articles."""
    client = get_openai_client()
    
    prompt = create_prompt(news_articles, user_selected_interests, user_typed_interests)

    stream = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        stream=True,
    )
    response_content = []
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            response_content.append(chunk.choices[0].delta.content)
    full_response = "".join(response_content)

    return full_response

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:b2wPrkMAOAYRCEDcPL5R@p-newspaperdb.ch60ws40s4xa.us-east-2.rds.amazonaws.com/postgres' 
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'users'
    __table_args__ = {'schema': 'pnews'} 
    user_id = db.Column(db.Integer, primary_key=True)
    google_id = db.Column(db.String, unique=True)
    news_interests = db.Column(db.ARRAY(db.String))

    def __repr__(self):
        return f'<User {self.user_id}>'


class Article(db.Model):
    __tablename__ = 'news_articles'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    date = db.Column(db.Date, nullable=False)
    summary = db.Column(db.Text)
    url = db.Column(db.String(255), nullable=False)
    title_tsvector = db.Column(TSVectorType('title'))
    
    def __repr__(self):
        return f'<Article {self.id}'
    
@app.route('/', methods=['GET'])
def hello():
    return 'Hello, World!'

@app.route('/fetch-news', methods=['POST', 'OPTIONS'])
@cross_origin(origins=['http://localhost:3000'])
def get_news():
    data = request.get_json()
    user_typed_interests = data.get('interests', [])
    google_id = data.get('google_id', None) 

    user_selected_interests = []

    if google_id:
        user = User.query.filter_by(google_id=google_id).first()
        if user:
            user_selected_interests = user.news_interests

    print("google id: ", google_id)
    print("selected interests: ", user_selected_interests)
    print("typed interests: ", user_typed_interests)
    try:
        if user_selected_interests: 
            query = db.session.query(Article).filter(
                func.to_tsvector(Article.title).match(func.plainto_tsquery(' & '.join(user_selected_interests)))
            )
            news_stories = query.all()
        # news_stories = [{'title': 'Global Leaders Meet to Address Climate Change Urgency', 'summary': 'In a landmark summit held in Paris, leaders from over 50 nations convened to discuss actionable strategies against the escalating threat of climate change.', 'url': 'www.news.com', 'date': '2/3/2023'}, {'title': 'Record-Breaking Marathon Victory Shatters Decades-Old Record', 'summary': 'Ethiopian runner, Alemu Bekele, made history at the Berlin Marathon by breaking a two-decade-old world record, finishing in an astonishing time of 2:01:39.', 'url': 'www.news2.com', 'date': '3/234/333'}]
            if news_stories:
                news_stories = filter_news(news_stories, user_selected_interests, user_typed_interests)
                return jsonify(news_stories), 200
            else:
                return jsonify({'error': 'No news stories found'}), 404
        else:
            return jsonify({'error': 'No user interests found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

@app.route('/user/add', methods=['POST'])
def add_or_update_user():
    data = request.get_json()
    google_id = data.get('google_id')
    interests = data.get('interests', [])  

    # Attempt to find an existing user with the given google_id
    user = User.query.filter_by(google_id=google_id).first()
    print(user)
    
    if user:
        user.news_interests = interests
        db.session.commit()
        return jsonify({'message': 'User interests updated successfully'}), 200
    else:
        new_user = User(google_id=google_id, news_interests=interests)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'New user added successfully'}), 201
    
with app.app_context():
    db.create_all()
    db.session.commit()
    
if __name__ == "__main__":
    app.run(debug=True, port=5001)
    