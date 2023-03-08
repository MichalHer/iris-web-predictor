from ..models import Model

def predict(SepalLengthCm, SepalWidthCm, PetalLengthCm, PetalWidthCm):
    ai = Model("model.pkl")
    return ai.model.predict([[SepalLengthCm, SepalWidthCm, PetalLengthCm, PetalWidthCm]]).tolist()[0]
