try:

    prediction = model.predict(data)

except Exception as e:

    logger.error(json.dumps({

        "event":"prediction_error",

        "request_id":request_id,

        "error":str(e),

        "status":"failed"
    }))

    raise
