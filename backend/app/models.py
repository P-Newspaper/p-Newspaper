from app import db
from sqlalchemy import Column, Integer, String, Text, func
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy_utils.types import TSVectorType

Base = declarative_base()

class User(db.Model):
    __tablename__ = 'users'
    __table_args__ = {'schema': 'pnews'} 
    user_id = db.Column(db.Integer, primary_key=True)
    google_id = db.Column(db.String, unique=True)
    news_interests = db.Column(db.ARRAY(db.String))

    def __repr__(self):
        return f'<User {self.user_id}>'


class Article(db.Model):
    __tablename__ = 'news_articles'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    date = db.Column(db.Date, nullable=False)
    summary = db.Column(db.Text)
    url = db.Column(db.String(255), nullable=False)
    title_tsvector = db.Column(TSVectorType('title'))
    
    def __repr__(self):
        return f'<Article {self.id}'


