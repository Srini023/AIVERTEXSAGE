Create New SageMaker Model
aws sagemaker create-model \
  --model-name ml-model-v2 \
  --execution-role-arn $ROLE_ARN \
  --primary-container \
Image=ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/ml-model:v2

Create EndpointConfig
aws sagemaker create-endpoint-config \
  --endpoint-config-name ml-model-v2-config \
  --production-variants '[
  {
    "VariantName":"AllTraffic",
    "ModelName":"ml-model-v2",
    "InitialInstanceCount":2,
    "InstanceType":"ml.m5.large"
  }]'

Update Endpoint
aws sagemaker update-endpoint \
  --endpoint-name my-endpoint \
  --endpoint-config-name ml-model-v2-config

Monitor:
aws sagemaker describe-endpoint \
  --endpoint-name my-endpoint \
  --query EndpointStatus


Verify Logging in SageMaker
Invoke endpoint:
aws sagemaker-runtime invoke-endpoint \
  --endpoint-name my-endpoint \
  --content-type application/json \
  --body fileb://request.json \
  response.json

View logs:
aws logs tail \
/aws/sagemaker/Endpoints/my-endpoint \
--follow


