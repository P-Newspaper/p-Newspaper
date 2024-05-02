from flask import Blueprint, request, jsonify, current_app
from .api_integration import filter_news
from .models import User, Article
from app import db
from sqlalchemy import func
from flask_cors import cross_origin
import logging

main = Blueprint('main', __name__)

@main.route('/api/home', methods=['GET'])
def home():
    return 'Hello, World!'

@main.route('/fetch-news', methods=['POST', 'OPTIONS'])
@cross_origin()
def get_news():
    logging.info("Request Headers: %s", request.headers)
    data = request.get_json()
    user_typed_interests = data.get('interests', [])

    google_id = data.get('google_id', None) 

    user_selected_interests = []

    if google_id:
        user = User.query.filter_by(google_id=google_id).first()
        if user:
            user_selected_interests = user.news_interests

    print(google_id)
    print(user_selected_interests)
    print(user_typed_interests)
    try:
        if user_selected_interests: 
            query = db.session.query(Article).filter(
                func.to_tsvector(Article.title).match(func.plainto_tsquery(' & '.join(user_selected_interests)))
            )
            news_stories = query.all()
        # news_stories = [{'title': 'Global Leaders Meet to Address Climate Change Urgency', 'summary': 'In a landmark summit held in Paris, leaders from over 50 nations convened to discuss actionable strategies against the escalating threat of climate change.', 'url': 'www.news.com', 'date': '2/3/2023'}, {'title': 'Record-Breaking Marathon Victory Shatters Decades-Old Record', 'summary': 'Ethiopian runner, Alemu Bekele, made history at the Berlin Marathon by breaking a two-decade-old world record, finishing in an astonishing time of 2:01:39.', 'url': 'www.news2.com', 'date': '3/234/333'}]
        news_stories = filter_news(news_stories, user_selected_interests, user_typed_interests)
        return jsonify(news_stories), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

@main.route('/user/add', methods=['POST'])
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
    