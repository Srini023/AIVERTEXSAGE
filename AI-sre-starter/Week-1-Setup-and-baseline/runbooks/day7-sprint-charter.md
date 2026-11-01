Day 7 Runbook – Sprint Charter
Sprint Goals
Establish baseline infrastructure for multi‑cloud SRE workflows (GCP + AWS).

Deploy and validate containerized model server across environments.

Implement monitoring and billing safeguards to ensure controlled spend.

Document processes in runbooks for reproducibility and stakeholder visibility.

SLO Targets
Latency (p99): ≤ 500 ms per prediction request (FastAPI + sklearn iris).

Availability: ≥ 99.5% uptime during sprint test window.

Error Rate: ≤ 1% failed requests under load (k6 baseline).

Acceptance Criteria
Terraform backends (GCS + S3/DynamoDB) initialized and validated.

IAM service accounts/roles created with minimal policies (Vertex SRE SA, SageMaker Exec Role).

Container image built, tested locally, and pushed to GCR + ECR.

Budget alerts active in both GCP and AWS.

Model server accessible via container run and cloud pull, meeting SLO targets.

Documentation (runbooks Day 1–7) committed to repo and shared with stakeholders.

✅ Outcome
Sprint charter defined and agreed.

Clear goals, measurable SLOs, and acceptance criteria established.

Document added to repo for stakeholder review.
