from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import predictions

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(predictions.router)

@app.get("/")
def hello():
    return {"app":"iris web predictor", "version":"1.0 beta"}