from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})  # Allow only frontend origin

# Endpoint to receive a single journal entry object
journalentry=""
@app.route('/api/entries', methods=["POST"])
def add_entry():
    data = request.get_json()  # Get the JSON object from the request
    #to make certain changes in received data from frontend and sending back to it
    global journalentry
    for i in data:
        i["userName"]="Arnav"
        journalentry=journalentry+" "+i["text"]
    print(journalentry)
       
    # print(data)
    # Return the modified object back to the frontend
    return jsonify({"message": "Entry modified successfully!", "data": data}), 200

if __name__ == "__main__":
    app.run(debug=True)
