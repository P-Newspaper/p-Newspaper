from newspaper import Article
from newspaper import build
import requests

# Placeholder for fetching news based on interests using Newspaper3k and ChatGPT API
def fetch_news(interests):
    # example with CNN
    cnn_paper = build('http://cnn.com')
    articles = []
    for article in cnn_paper.articles:
        try:
            article.download()
            article.parse()
            articles.append({
                'title': article.title,
                'url': article.url
            })
        except Exception as e:
            print(e)
            continue

    # placeholder: send articles and interests to ChatGPT API for filtering
    # filtered_news = call_chatgpt_api(articles, interests)
    filtered_news = articles  # replace with actual call to ChatGPT

    return filtered_news
