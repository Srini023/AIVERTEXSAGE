#!/bin/bash
docker build -t my-iris:latest .
docker run -p 8080:8080 my-iris:latest

