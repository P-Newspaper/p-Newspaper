from flask import Blueprint, request, jsonify, current_app
from .api_integration import filter_news
from .models import User
from app import db

main = Blueprint('main', __name__)

@main.route('/fetch-news', methods=['POST'])
def get_news():
    data = request.get_json()
    user_typed_interests = data.get('interests', [])

    try:
        news_stories = filter_news(user_typed_interests)
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