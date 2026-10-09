terraform {
  backend "s3" {
    bucket         = "srevert-tfstate"
    key            = "aws/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}

