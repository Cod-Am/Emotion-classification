import pickle
from flask import Flask, request, jsonify
import numpy as np
import nltk
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
from flask_cors import CORS
from sklearn.feature_extraction.text import TfidfVectorizer

def processing(corpus):
    model = pickle.load(open('trained_model.pkl', 'rb'))
    vectorizer = pickle.load(open('vectorizer.pkl', 'rb'))
    lemmatizer=WordNetLemmatizer()
    tokenized_document = word_tokenize(corpus)
    filtered_document = [word for word in tokenized_document if word.lower() not in stopwords.words('english')]
    lemmatized_document = [lemmatizer.lemmatize(document) for document in filtered_document]
    corpus = vectorizer.transform(lemmatized_document)
    corpus = corpus.toarray()
    result = model.predict(corpus)
    return result

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
        
        journalentry=journalentry+" "+i["text"]
        result = processing(journalentry)
    print(journalentry)
    print(result)
       
    # print(data)
    # Return the modified object back to the frontend
    return jsonify({"message": "Entry modified successfully!", "data": data, 'result':result[0]}), 200

if __name__ == "__main__":
    app.run(debug=True)
