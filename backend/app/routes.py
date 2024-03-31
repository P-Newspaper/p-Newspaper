from flask import Blueprint, request, jsonify
from .models import fetch_news
from .api_integration import filter_news

main = Blueprint('main', __name__)

@main.route('/fetch-news', methods=['POST'])
def get_news():
    data = request.get_json()
    user_typed_interests = data.get('interests', [])
    user_selected_interests = ["sports", "politics", "entertainment"]

    try:
        news_stories = filter_news(user_selected_interests, user_typed_interests)
        return jsonify(news_stories), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
