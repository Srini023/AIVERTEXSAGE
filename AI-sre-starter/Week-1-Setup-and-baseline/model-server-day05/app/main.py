from fastapi import FastAPI
from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression

app = FastAPI()

# Train a simple model
iris = load_iris()
X, y = iris.data, iris.target
model = LogisticRegression(max_iter=200)
model.fit(X, y)

@app.get("/predict")
def predict(sepal_length: float, sepal_width: float,
            petal_length: float, petal_width: float):
    features = [[sepal_length, sepal_width, petal_length, petal_width]]
    prediction = model.predict(features)[0]
    return {"class": iris.target_names[prediction]}

