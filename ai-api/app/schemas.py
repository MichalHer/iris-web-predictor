from pydantic import BaseModel
from typing import Optional, List

class PredictionInput(BaseModel):
    sepal_width: float
    sepal_length: float
    petal_width: float
    petal_length: float
    
class ProcessId(BaseModel):
    id: str
    
class PredictionOutput(ProcessId):
    status: str
    prediction: Optional[str]