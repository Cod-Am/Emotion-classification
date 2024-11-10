from flask import Flask, request, jsonify

app = Flask(__name__)

# Endpoint to receive journal entries
@app.route('/api/entries', methods=["POST"])
def add_entry():
    data = request.get_json()  # Get data from the React front end
    # Process or save the entry (here, just returning the data for demo)
    print("Received entry:", data)
    # Simulate saving the entry (you could save it in a database here)
    # Return a success response
    return jsonify({"message": "Entry added successfully!"}), 200

if __name__ == "__main__":
    app.run(debug=True)
