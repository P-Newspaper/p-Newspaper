import requests
from openai import OpenAI
from dotenv import load_dotenv
import os
import sys
from ..backend.app.access_news import get_news_from_all

load_dotenv()


# Initialize OpenAI client with API key
openai_api_key = os.environ.get('OPENAI_API_KEY')
client = OpenAI(api_key=openai_api_key)                                                                                                             

def create_prompt(news_articles, user_interests):
    prompt = "Here is a list of news headlines and summaries:" 
    for article in news_articles:
        prompt += "\n" + article
    prompt += "\nHere are the user's interests: "
    for interest in user_interests:
        prompt += interest + " "
    prompt += "\nIn the same format inputted, output the headlines and summaries that are most relevant to these interests, in order of relevance."
    return prompt


# # Write function to scrape news articles
# def get_articles():
#      # Example URL of the news source
#     urls = ['https://www.nytimes.com/', 'https://www.cnn.com/']
#     articles = []

#     try:
#         # Send a GET request to fetch the news articles
#         for url in urls:
#             response = requests.get(url)
#             if response.status_code == 200:
#                 # Example: Parse HTML content to extract article headlines and summaries
#                 soup = BeautifulSoup(response.content, 'html.parser')
#                 # BeautifulSoup is a library
#                 # Implement logic to extract headlines and summaries from the HTML content
#                 # Append the extracted data to the articles list
#             else:
#                 print(f"Failed to fetch news articles from {url}: {response.status_code}")
#     except Exception as e:
#         print(f"Error fetching news articles: {e}")
#         return []

# Example usage:
news_articles = get_news_from_all()
print(news_articles)
    

def filter_news(news_headlines, user_interests):

    prompt = create_prompt(news_headlines, user_interests)

    stream = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        stream=True,
    )
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")

# Example usage:
news_headlines = ["Global Leaders Meet to Address Climate Change Urgency - In a landmark summit held in Paris, leaders from over 50 nations convened to discuss actionable strategies against the escalating threat of climate change.", "Record-Breaking Marathon Victory Shatters Decades-Old Record - Ethiopian runner, Alemu Bekele, made history at the Berlin Marathon by breaking a two-decade-old world record, finishing in an astonishing time of 2:01:39."]
user_interests = ["sports", "politics"]
filter_news(news_headlines, user_interests)

    