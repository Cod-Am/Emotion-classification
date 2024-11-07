# https://www.geeksforgeeks.org/how-to-connect-reactjs-with-flask-api/
# https://dev.to/ondiek/sending-data-from-react-to-flask-apm
from flask import Flask

app = Flask(__name__)

@app.route('/journal', methods=["POST"])
def 