from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

import os


db = SQLAlchemy()

def create_app():
    app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:b2wPrkMAOAYRCEDcPL5R@p-newspaperdb.ch60ws40s4xa.us-east-2.rds.amazonaws.com/postgres' 
    db.init_app(app)
    CORS(app, resources={r"/user/*": {"origins": "http://localhost:3000"}})

    with app.app_context():
        db.create_all()

    from .routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve(path):
        full_path = os.path.join(app.static_folder, path)
        if path != "" and os.path.exists(full_path):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, 'index.html')

    return app
