from pydantic import BaseModel

class PredictionInput(BaseModel):
    sepal_width: float
    sepal_length: float
    petal_width: float
    petal_length: float
    
class ProcessId(BaseModel):
    id: int
    
class PredictionOutput(ProcessId):
    status: str
    prediction: str