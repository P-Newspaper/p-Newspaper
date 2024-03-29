from flask import Flask, send_from_directory

def create_app():
    app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')

    from .routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve(path):
        if path != "" and path.exists(app.static_folder + '/' + path):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, 'index.html')
    
    return app
