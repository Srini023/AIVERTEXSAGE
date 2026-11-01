Push to Vertex AI Registry
docker tag ml-model:v2 \
us-central1-docker.pkg.dev/PROJECT_ID/ml-repo/ml-model:v2

Push:
docker push \
us-central1-docker.pkg.dev/PROJECT_ID/ml-repo/ml-model:v2

Redeploy Vertex AI
Upload new model:
gcloud ai models upload \
  --region=us-central1 \
  --display-name=ml-model-v2 \
  --container-image-uri=us-central1-docker.pkg.dev/PROJECT_ID/ml-repo/ml-model:v2


Deploy:

Shell
gcloud ai endpoints deploy-model ENDPOINT_ID \
  --region=us-central1 \
  --model=NEW_MODEL_ID \
  --display-name=v2 \
  --machine-type=n1-standard-2 \
  --traffic-split=0=100

Push to ECR
docker tag ml-model:v2 \
ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/ml-model:v2

Push:

docker push \
ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/ml-model:v2


Verify Logging in Vertex AI
Generate traffic:
gcloud ai endpoints predict \
  ENDPOINT_ID \
  --region=us-central1 \
  --json-request=request.json

Review logs:
gcloud logging read \
'resource.type="aiplatform.googleapis.com/Endpoint"'




