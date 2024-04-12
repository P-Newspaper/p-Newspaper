import sys
import newspaper as newspaper3k
import datetime
from concurrent.futures import ThreadPoolExecutor, as_completed

def opt_news_from_all():
    """Returns a list of news articles from a set of news sources;
            Each article is a dictionary with 'title' 'summary' 'url' 'date' (YYYY-MM-DD)
            Slightly faster from threading!"""
    siteL=['http://www.huffingtonpost.com', 'http://cnn.com','http://www.cnbc.com','http://theatlantic.com', 
           'http://www.bbc.co.uk','http://www.businessinsider.com','http://nytimes.com','http://yahoo.com',
           'http://www.nbcnews.com','http://www.popsci.com','http://www.pbs.org','http://www.politico.com','http://www.reuters.com','http://www.latimes.com','http://www.forbes.com',
           'http://washingtonpost.com']
    finalNews = []
    with ThreadPoolExecutor(max_workers=100) as executor:
        result_list = {executor.submit(get_news_from_site, (i)) for i in siteL}
        for result in as_completed(result_list):
            print(result.result())
            finalNews+=result.result()
    return finalNews


def get_news_from_all():
    """Returns a list of news articles from a set of news sources; sorted by date
            Each article is a dictionary with 'title' 'summary' 'url' 'date' (YYYY-MM-DD)"""
    siteL=get_news_sites()
    fullList = []
    for url in siteL:
        fullList += get_news_from_site(url)
    fullSorted = sort_by_date(fullList)
    return fullSorted

def sort_by_date(articleL):
    """sort list of articles dictionaries by date"""
    sortedArticles = sorted(articleL, key=lambda i: i['date'], reverse=True)
    return sortedArticles

def get_articles_lastD(articleL):
    """get articles only from the last day
        Returns list of articles"""
    today = datetime.date.today().strftime('%Y-%m-%d')
    dateA = sort_by_date(articleL)
    todayArt = []
    i = 0
    passedDate = False
    while i < len(dateA) and not passedDate:
        if articleL[i]['date'] >= today:
            todayArt.append(dateA[i])
            i += 1
        else:
            passedDate = True
    return todayArt

def get_articles_lastW(articleL):
    """get articles only from the last week
    Returns list of articles"""
    last_week = datetime.date.today() - datetime.timedelta(days=7)
    last_week = last_week.strftime('%Y-%m-%d')
    dateA = sort_by_date(articleL)
    weekArt = []
    i = 0
    passedDate = False
    while i < len(dateA) and not passedDate:
        if articleL[i]['date'] >= last_week:
            weekArt.append(dateA[i])
            i += 1
        else:
            passedDate = True
    return weekArt

def get_articles_lastM(articleL):
    """get articles only from the last month
    return list of articles"""
    last_month = datetime.date.today() - datetime.timedelta(days=30)
    last_month = last_month.strftime('%Y-%m-%d')
    dateA = sort_by_date(articleL)
    monthArt = []
    i = 0
    passedDate = False
    while i < len(dateA) and not passedDate:
        if articleL[i]['date'] >= last_month:
            monthArt.append(dateA[i])
            i += 1
        else:
            passedDate = True
    return monthArt

def get_news_sites():
    """gets most popular news sites"""
    return newspaper3k.popular_urls()

def get_news_from_site(url):
    """scrapes news articles from the site and returns list containing individual dictionaries of title, keyword, summary per article"""
    paper = newspaper3k.build(url, language = 'en', memoize_articles=False)
    articleL = []
    last_month = datetime.date.today() - datetime.timedelta(days=30)
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
