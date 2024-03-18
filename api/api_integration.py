import requests
from openai import OpenAI
from config import Config


# Note: Replace all "OPENAI_API_KEY"
# Authorization: Bearer OPENAI_API_KEY
# Need to fund package:
#   p-Newspaper
#   └── https://github.com/sponsors/jimmywarting
#       └── node-domexception@1.0.0


OpenAI.api_key = Config.openai_api_key

client = OpenAI()

def create_prompt(news_articles, user_interests):
    prompt = "Here is a list of news headlines and summaries:" 
    for article in news_articles:
        prompt += "\n" + article
    prompt += "\nHere are the user's interests: "
    prompt += user_interests
    prompt += "\nIn the same format inputted, output the headlines and summaries that are most relevant to these interests, in order of relevance."
    return prompt


# Write function to scrape news articles
# def get_articles()
    

def filter_news(news_headlines, user_interests):
    # api_url = 'apiurl'
    # MAKE SURE TO NOT COMMIT THE ACTUAL API KEY - STORE IT IN .env
    # api_key = 'apikey'

    # news_headlines = get_articles()

    news_headlines = ["Headline 1 - Summary 1", "Headline 2 - Summary 2"]
    user_interests = "sports, politics"
    prompt = create_prompt(news_headlines, user_interests)

    stream = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        stream=True,
    )
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")

    