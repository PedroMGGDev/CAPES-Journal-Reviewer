import numpy as np
import nltk
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.optimizers import Adam
from nltk.corpus import stopwords

nltk.download('stopwords')
nltk.download('punkt')

data = [
    ("Artificial intelligence methods in data analysis", "Journal of AI Research"),
    ("Data mining techniques for big data", "Data Science Today"),
    ("Machine learning models for prediction", "Journal of Machine Learning"),
    ("Neural networks in pattern recognition", "Neural Networks Review"),
    ("Deep learning applications in natural language processing", "Journal of AI Research"),
    ("Big data analytics in healthcare", "Data Science Today"),
    ("Supervised learning algorithms for classification", "Journal of Machine Learning"),
    ("Applications of deep learning in computer vision", "Neural Networks Review"),
]

texts = [item[0] for item in data]
labels = [item[1] for item in data]

stop_words = stopwords.words('english')
vectorizer = TfidfVectorizer(stop_words=stop_words)

X = vectorizer.fit_transform(texts).toarray()

label_encoder = LabelEncoder()
y = label_encoder.fit_transform(labels)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = Sequential()
model.add(Dense(128, input_dim=X_train.shape[1], activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(64, activation='relu'))
model.add(Dense(len(np.unique(y)), activation='softmax'))

model.compile(loss='sparse_categorical_crossentropy', optimizer=Adam(), metrics=['accuracy'])

model.fit(X_train, y_train, epochs=10, batch_size=4, validation_data=(X_test, y_test))

def predict_journal(abstract):
    abstract_vec = vectorizer.transform([abstract]).toarray()
    prediction = model.predict(abstract_vec)
    predicted_label = np.argmax(prediction)
    return label_encoder.inverse_transform([predicted_label])[0]

abstract_input = input("Enter the abstract to predict the journal: ")
predicted_journal = predict_journal(abstract_input)
print(f"The recommended journal for this abstract is: {predicted_journal}")