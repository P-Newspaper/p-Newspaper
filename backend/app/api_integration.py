from openai import OpenAI
from .access_news import get_news_from_all, opt_news_from_all
from .config import Config


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
        print(article)
        prompt += "\n" + article['title'] + ": " + article['summary'] + "\n" + article['url'] + "\n" + "Published: " + article['date'] + "\n"
    prompt += "\nHere are the user's previously selected interests: "
    prompt += "\n" + ", ".join(user_selected_interests)
    prompt += "\nHere is a description of what the user wants to read about today: "
    prompt += ", ".join(user_typed_interests)
    print(prompt)
    prompt += '\nOutput the headlines, summaries, published dates, and URLs that are most relevant to these interests, in order of relevance. Display the results in the following format, with the correct information added where it says to insert: [{"title":"insert title","date":"insert date","summary":"insert summary","url":"insert url here"}, {insert other articles in the same format}]. Do not output anything else.'
    return prompt
 

def filter_news(news_articles, user_selected_interests, user_typed_interests):
    """Creates a prompt with news articles and user's interests, and returns ChatGPT's response
    filtering for the most relevant articles."""
    client = get_openai_client()
    
    prompt = create_prompt(news_articles, user_selected_interests, user_typed_interests)

    stream = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        stream=True,
    )
    response_content = []
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            response_content.append(chunk.choices[0].delta.content)
    full_response = "".join(response_content)

    return full_response
 
# # Example usage:

# news_headlines = opt_news_from_all()
# user_selected_interests = ["sports", "politics", "entertainment"]
# user_typed_interests = "I would like to read about new stories in sports and politics today."
# filter_news(user_selected_interests, user_typed_interests)

