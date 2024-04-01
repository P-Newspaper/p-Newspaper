from dotenv import load_dotenv
import os

load_dotenv()

class Config:
    openai_api_key = os.environ.get('OPENAI_API_KEY')



