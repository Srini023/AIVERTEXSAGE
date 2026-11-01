import json
import uuid
import time
import logging

from fastapi import FastAPI

app = FastAPI()

logger = logging.getLogger()
logger.setLevel(logging.INFO)

@app.post("/predict")
def predict(payload: dict):

    request_id = str(uuid.uuid4())

    start = time.time()

    confidence = 0.97

    latency_ms = round(
        (time.time() - start) * 1000,
        2
    )

    log_data = {
        "request_id": request_id,
        "latency_ms": latency_ms,
        "confidence": confidence,
        "status": "success"
    }

    logger.info(json.dumps(log_data))

    return {
        "request_id": request_id,
        "confidence": confidence
    }
