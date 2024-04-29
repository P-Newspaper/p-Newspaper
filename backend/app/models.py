from app import db

class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True)
    google_id = db.Column(db.Integer, unique=True)
    news_interests = db.Column(db.ARRAY(db.String))

    def __repr__(self):
        return f'<User {self.user_id}>'


class Article(db.Model):
    __tablename__ = 'news_articles'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    summary = db.Column(db.Text)
    url = db.Column(db.String(255), nullable=False)

