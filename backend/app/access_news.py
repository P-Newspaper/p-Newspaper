import newspaper

def get_news_sites():
    """gets most popular news sites"""
    return newspaper.popular_urls()

def get_news_from_site(url):
    """scrapes news articles from the site and returns list containing individual dictionaries of title, keyword, summary per article"""
    paper = newspaper.build(url, language = 'en')
    articleL = []
    count = 0

    for article in paper.articles:
        try: 
            articleD = {}
            article.download()
            article.parse()
            article.nlp()
            articleD['title'] = article.title
            articleD['keywords']= article.keywords
            articleD['summary']= article.summary
            articleL.append(articleD)
        except:
            pass
        count += 1
        if count >= 3:
            break
    return articleL

def get_news_from_all(siteL):
    """gets news from a list of sources"""
    fullList = []
    for url in siteL:
        fullList += get_news_from_site(url)
    return fullList

def get_popular_topics():
    """popular topics at present"""
    return newspaper.hot()