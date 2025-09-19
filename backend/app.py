from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) #allow react frontend to call flask APIs

@app.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from Okiedokie Backend!"})

if __name__ == "__main__":
    app.run(debug=True)
