# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy import Column, Integer, String, Text, create_engine
# from sqlalchemy.orm import sessionmaker

# Base = declarative_base()

# class Article(Base):
#     __tablename__ = 'articles'
#     id = Column(Integer, primary_key=True)
#     title = Column(String(255), nullable=False)
#     summary = Column(Text)
#     url = Column(String(255), nullable=False)

# DATABASE_URI = ''

# engine = create_engine(DATABASE_URI, echo=True)
# Session = sessionmaker(bind=engine)

# def get_session():
#     return Session()
