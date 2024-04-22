import sys
import newspaper as newspaper3k
import datetime
from concurrent.futures import ThreadPoolExecutor, as_completed

def opt_news_from_all():
    """Returns a list of news articles from a set of news sources;
            Each article is a dictionary with 'title' 'summary' 'url' 'date' (YYYY-MM-DD)
            Slightly faster from threading!"""
    siteL=['http://www.huffingtonpost.com', 'https://edition.cnn.com/?hpt=header_edition-picker','http://www.cnbc.com','https://www.cnbc.com/world/','http://theatlantic.com', 
           'http://www.bbc.co.uk','https://www.businessinsider.com/us','http://nytimes.com','https://uk.yahoo.com/?p=dnr',
           'http://www.nbcnews.com','http://www.popsci.com','http://www.politico.com','http://www.reuters.com','http://www.latimes.com','https://www.forbes.com/home_usa/?sh=5b40ae9e324b',
           'http://washingtonpost.com']
    finalNews = []
    with ThreadPoolExecutor(max_workers=100) as executor:
        result_list = {executor.submit(get_news_from_site, (i)) for i in siteL}
        for result in as_completed(result_list):
            print(result.result())
            finalNews+=result.result()
    return finalNews



def get_news_from_site(url):
    """scrapes news articles from the site and returns list containing individual dictionaries of title, keyword, summary per article"""
    paper = newspaper.build(url, language = 'en', memoize_articles=False)
    articleL = []
    last_month = datetime.date.today() - datetime.timedelta(days=7)
    last_month = last_month.strftime('%Y-%m-%d')
    i = 0
    passedDate = False

    for article in paper.articles:
        try: 
            articleD = {}
            article.download()
            article.parse()
            article.nlp()
            articleDate = article.publish_date
            cleanDate = datetime.datetime.strptime(str(articleDate), '%Y-%m-%d %H:%M:%S').strftime('%Y-%m-%d')
            if cleanDate >= last_month:
                articleD['date']=cleanDate
                articleD['title'] = article.title
                articleD['summary']= article.summary
                articleD['url']=article.url
                articleL.append(articleD)
            else:
                break
        except:
            pass
    return articleL

def handler(event, context):
    response = opt_news_from_all()
    return response

if __name__ == "__main__":
    handler(None, None)
