import requests
from openai import OpenAI

# Note: Replace all "OPENAI_API_KEY"
# Authorization: Bearer OPENAI_API_KEY
# Need to fund package:
#   p-Newspaper
#   └── https://github.com/sponsors/jimmywarting
#       └── node-domexception@1.0.0

client = OpenAI()

stream = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Say this is a test"}],
    stream=True,
)
for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="")

def filter_news(news_headlines, user_interests):
    api_url = 'apiurl'
    # MAKE SURE TO NOT COMMIT THE ACTUAL API KEY - STORE IT IN .env
    api_key = 'apikey'
    