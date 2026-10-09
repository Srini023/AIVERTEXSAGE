terraform {
  backend "gcs" {
    bucket  = "srevert-tfstate"
    prefix  = "gcp"
  }
}

