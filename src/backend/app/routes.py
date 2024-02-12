from flask import Blueprint, request, jsonify
from .models import fetch_news

main = Blueprint('main', __name__)

@main.route('/fetch-news', methods=['POST'])
def get_news():
    user_interests = request.json['interests']
    try:
        news_stories = fetch_news(user_interests)
        return jsonify(news_stories), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
