from ..models import Model

ai = Model("model.pkl")

def predict(SepalLengthCm, SepalWidthCm, PetalLengthCm, PetalWidthCm):
    return ai.model.predict([[SepalLengthCm, SepalWidthCm, PetalLengthCm, PetalWidthCm]]).tolist()[0]
