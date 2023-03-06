from random import randint
from fastapi import Depends, APIRouter, status, HTTPException
from redis import StrictRedis

from .. import schemas
from ..config import settings


router = APIRouter(
    prefix="/accounts",
    tags = ['Accounts']
)

# Creates prediction task in Redis DB
@router.post("/", response_model=schemas.ProcessId)
def create_prediction_task(pload: schemas.PredictionInput):
    task_id = randint(10000000000,99999999999)
    redisClient = StrictRedis(host=settings.REDIS_HOST, port=settings.REDIS_PORT, password=settings.REDIS_PASSWORD, db=0)
    redisClient.lpush(task_id, pload.petal_width, pload.petal_length, pload.sepal_width, pload.sepal_length, "Waiting", "None")
    redisClient.expire(task_id, 10800)
    return {"id":task_id}

@router.get("/", response_model=schemas.PredictionOutput)
def get_prediction_by_id(id: int):
    redisClient = StrictRedis(host=settings.REDIS_HOST, port=settings.REDIS_PORT, db=0)
    if not redisClient.exists(id):
        raise HTTPException(404, detail=[{"msg": "Task not found."}])
    prediction = redisClient.lindex(id,0)
    status = redisClient.lindex(id,1)
    if bytes(status).decode() == "Done":
        redisClient.delete(id)
    return {"id":id, "status":status, "prediction": prediction}