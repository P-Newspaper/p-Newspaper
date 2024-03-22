import requests
from openai import OpenAI
from dotenv import load_dotenv
import os
from bs4 import BeautifulSoup

load_dotenv()


# Authorization: Bearer OPENAI_API_KEY
# Need to fund package:
#   p-Newspaper
#   └── https://github.com/sponsors/jimmywarting
#       └── node-domexception@1.0.0


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


# Write function to scrape news articles
def get_articles():
     # Example URL of the news source
    urls = ['https://www.nytimes.com/', 'https://www.cnn.com/']
    articles = []

    try:
        # Send a GET request to fetch the news articles
        for url in urls:
            response = requests.get(url)
            if response.status_code == 200:
                # Example: Parse HTML content to extract article headlines and summaries
                soup = BeautifulSoup(response.content, 'html.parser')
                # BeautifulSoup is a library
                # Implement logic to extract headlines and summaries from the HTML content
                # Append the extracted data to the articles list
            else:
                print(f"Failed to fetch news articles from {url}: {response.status_code}")
    except Exception as e:
        print(f"Error fetching news articles: {e}")
        return []

# Example usage:
news_articles = get_articles()
print(news_articles)
    

def filter_news(news_headlines, user_interests):
    # api_url = 'apiurl'
    # MAKE SURE TO NOT COMMIT THE ACTUAL API KEY - STORE IT IN .env
    # api_key = 'apikey'

    # news_headlines = get_articles()
    prompt = create_prompt(news_headlines, user_interests)

    stream = client.chat_completion(prompt)
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")
            
            
    # news_headlines = ["Headline 1 - Summary 1", "Headline 2 - Summary 2"]
    # user_interests = ["sports", "politics"]
    # prompt = create_prompt(news_headlines, user_interests)

    # stream = client.chat.completions.create(
    #     model="gpt-3.5-turbo",
    #     messages=[{"role": "user", "content": prompt}],
    #     stream=True,
    # )
    # for chunk in stream:
    #     if chunk.choices[0].delta.content is not None:
    #         print(chunk.choices[0].delta.content, end="")

# Example usage:
news_headlines = ["Headline 1 - Summary 1", "Headline 2 - Summary 2"]
user_interests = ["sports", "politics"]
filter_news(news_headlines, user_interests)

    