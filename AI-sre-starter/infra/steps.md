Steps
1. GCP Backend
Create bucket

gsutil mb -p srevert-sri023 -c standard -l asia-south1 gs://srevert-tfstate


Enable versioning
gsutil versioning set on gs://srevert-tfstate


2. AWS Backend
Create S3 bucket

aws s3 mb s3://srevert-tfstate --region ap-south-1

Enable versioning
aws s3api put-bucket-versioning --bucket srevert-tfstate --versioning-configuration Status=Enabled

Create DynamoDB table
aws dynamodb create-table \
  --table-name terraform-locks \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
  --region ap-south-1

3. Initialize Terraform
cd infra/gcp && terraform init
cd ../aws && terraform init

