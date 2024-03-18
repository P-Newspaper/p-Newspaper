from dotenv import load_dotenv
import os

load_dotenv()

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') 
    openai_api_key = os.environ.get('OPENAI_API_KEY')