import sys
import newspaper
import datetime
from concurrent.futures import ThreadPoolExecutor, as_completed
import sqlalchemy

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
                articleD['summary']= article.summary.replace("\n", "")
                articleD['url']=article.url
                articleL.append(articleD)
            else:
                break
        except:
            pass
    return articleL

def handler(event, context):
    # Check if the correct number of command-line arguments is provided
    if len(sys.argv) != 2:
        print("Usage: python script.py <password>")
        sys.exit(1)

    response = opt_news_from_all()

    # Extract the password from the command-line arguments
    password = sys.argv[1]

    # Now you can use the password in your script for database connection or other purposes
    print("Database password:", password)

    db_endpoint = 'p-newspaperdb.ch60ws40s4xa.us-east-2.rds.amazonaws.com'
    db_username = 'postgres'
    db_name = 'postgres'
   
    # Define the connection string for PostgreSQL
    db_url = f'postgresql://{db_username}:{password}@{db_endpoint}/{db_name}'
   
    # Create the SQL Alchemy engine
    engine = sqlalchemy.create_engine(db_url)
    
    # Iterate over the list of JSON objects and insert them into the database
    for article_data in response:
        # Construct an insert statement
        insert_stmt = sqlalchemy.text(
            '''
            INSERT INTO pnews.articles (date, title, summary, url)
            VALUES (:date, :title, :summary, :url)
            '''
        )
        
        # Execute the insert statement with the data from the JSON object
        with engine.connect() as connection:
            connection.execute(
                insert_stmt,
             #   date=article_data['date'],
             #   title=article_data['title'],
             #   summary=article_data['summary'],
             #   url=article_data['url']
                {
                    'date': article_data['date'],
                    'title': article_data['title'],
                    'summary': article_data['summary'],
                    'url': article_data['url']
                }    
            )
            connection.commit()

    print("Data inserted successfully.")

if __name__ == "__main__":
    handler(None, None)
