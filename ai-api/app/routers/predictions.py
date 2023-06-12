from random import randint
from fastapi import Depends, APIRouter, status, HTTPException
from rq import Queue
from rq.job import Job
from rq.exceptions import NoSuchJobError
import redis

from .. import schemas
from ..config import settings

from ..aiprocessor import predict

router = APIRouter(
    prefix="/predictions",
    tags = ['Predictions']
)

conn = redis.from_url(f"redis://{settings.REDIS_HOST}:{settings.REDIS_PORT}")
q = Queue(connection=conn)

# Creates prediction task in Redis DB
@router.post("/", response_model=schemas.ProcessId)
def create_prediction_task(pload: schemas.PredictionInput):
    job = q.enqueue_call(func=predict, 
                         args=(pload.sepal_length, pload.sepal_width, pload.petal_length, pload.petal_width),
                         result_ttl=5400)
    return {"id":job.get_id()}

@router.get("/result/{id}", response_model=schemas.PredictionOutput)
def get_prediction_result_by_id(id: str):
    try:
        job = Job.fetch(id, connection=conn)
    except NoSuchJobError:
        raise HTTPException(status_code=404, detail=[{"msg":"Job not found."}])
    return {"id":id, "status":job.get_status(), "prediction": str(job.result).replace("-"," ").title()}
