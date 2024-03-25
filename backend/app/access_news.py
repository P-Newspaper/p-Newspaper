import newspaper
import datetime

def get_news_sites():
    """gets most popular news sites"""
    return newspaper.popular_urls()

def get_news_from_site(url):
    """scrapes news articles from the site and returns list containing individual dictionaries of title, keyword, summary per article"""
    paper = newspaper.build(url, language = 'en', memoize_articles=False)
    articleL = []
    count = 0

    for article in paper.articles:
        try: 
            articleD = {}
            article.download()
            article.parse()
            article.nlp()
            articleD['title'] = article.title
            articleD['summary']= article.summary
            articleD['url']=article.url
            articleDate = article.publish_date
            cleanDate = datetime.datetime.strptime(str(articleDate), '%Y-%m-%d %H:%M:%S').strftime('%Y-%m-%d')
            articleD['date']=cleanDate
            articleL.append(articleD)
            count += 1
        except:
            pass
    return articleL


def get_news_from_all():
    """gets news from a list of popular sources"""
    siteL=get_news_sites()
    fullList = []
    for url in siteL:
        fullList += get_news_from_site(url)
    fullSorted = sort_by_date(fullList)
    return fullSorted

def sort_by_date(articleL):
    """sort list of articles (as dictionaries) by date"""
    sortedArticles = sorted(articleL, key=lambda i: i['date'], reverse=True)
    return sortedArticles

def get_articles_lastD(articleL):
    """get articles only from the last day"""
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
    """get articles only from the last week"""
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
    """get articles only from the last month"""
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
