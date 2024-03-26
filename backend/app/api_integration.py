from openai import OpenAI
from access_news import get_news_from_all
from config import Config


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
        prompt += "\n" + article['title'] + ": " + article['summary'] + "\n" + article['url'] + "\n" + "Published: " + article['date'] + "\n"
    prompt += "\nHere are the user's previously selected interests: "
    prompt += "\n" + ", ".join(user_selected_interests)
    prompt += "\nHere is a description of what the user wants to read about today: "
    prompt += user_typed_interests
    prompt += "\nIn the same format inputted, output the headlines and summaries that are most relevant to these interests, in order of relevance. Do not output anything else"
    return prompt
 

# Example usage:
# news_articles = get_news_from_site('http://cnn.com')

# first_20_articles = (get_news_from_site(news_articles))[:20]

# # # Iterate and print each article
# for article in first_20_articles:
#      print(article)
    

def filter_news(news_headlines, user_selected_interests, user_typed_interests):
    """"""
    client = get_openai_client()

    prompt = create_prompt(news_headlines, user_selected_interests, user_typed_interests)
    stream = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        stream=True,
    )
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")

# Example usage:
print("RUNNING")

# news_headlines = get_news_from_all()[:100]

news_headlines = [{"title": "Global Leaders Meet to Address Climate Change Urgency", "summary": "In a landmark summit held in Paris, leaders from over 50 nations convened to discuss actionable strategies against the escalating threat of climate change.", "url": "www.news.com", "date": "2/3/2023"}, {"title": "Record-Breaking Marathon Victory Shatters Decades-Old Record", "summary": "Ethiopian runner, Alemu Bekele, made history at the Berlin Marathon by breaking a two-decade-old world record, finishing in an astonishing time of 2:01:39.", "url": "www.news2.com", "date":"3/234/333"}]
user_selected_interests = ["sports", "politics", "entertainment"]
user_typed_interests = "I would like to read about new stories in sports and politics today."
filter_news(news_headlines, user_selected_interests, user_typed_interests)
print("DONE")

    