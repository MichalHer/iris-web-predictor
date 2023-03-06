from fastapi import Depends, APIRouter, status
from .. import schemas
from ..config import settings
from random import randint


router = APIRouter(
    prefix="/accounts",
    tags = ['Accounts']
)

@router.post("/", response_model=schemas.ProcessId)
def create_prediction_task(payload: schemas.PredictionInput):
    task_id = randint(10000000000,99999999999)
    # Logic
    return {"id":task_id}

@router.get("/", response_model=schemas.PredictionOutput)
def get_prediction_by_id(id: int):
    pass