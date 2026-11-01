Capturing p50/p95/p99

k6 automatically reports percentiles.

Example:
http_req_duration

avg=412ms

p(50)=380ms
p(95)=820ms
p(99)=1450ms

http_req_failed=0.00%



Record:
Endpoint         p50      p95      p99

Vertex AI        380ms    820ms    1450ms

SageMaker        420ms    910ms    1580ms


Export Results
k6 run \
  --summary-export results.json \
  multi_endpoint_test.js

Results saved:
results.json


Generate CSV Summary
jq '.metrics.http_req_duration' results.json


Extract:
avg
p50
p95
p99
max

Store in:
endpoint,p50,p95,p99,error_rate
vertex,380,820,1450,0
sagemaker,420,910,1580,0


Baseline Test Acceptance Criteria
Reliability
 Error Rate < 1%
 No 5XX responses
 No timeout errors
Performance
 p50 documented
 p95 documented
 p99 documented
 Requests/sec documented
Platform Health
 Vertex endpoint healthy
 SageMaker endpoint healthy
 No CloudWatch errors
 No Vertex AI deployment errors

Day 10 Baseline Report Template
Test Duration     : 2 minutes
Virtual Users     : 50

=========================
Vertex AI
=========================

p50              : _____ ms
p95              : _____ ms
p99              : _____ ms

Requests/sec     : _____
Error Rate       : _____ %

=========================
SageMaker
=========================

p50              : _____ ms
p95              : _____ ms
p99              : _____ ms

Requests/sec     : _____
Error Rate       : _____ %

Overall Status   : PASS / FAIL


Day 10 Exit Criteria
 Load test script created
 Baseline run completed (50 VUs, 2m)
 p50 recorded
 p95 recorded
 p99 recorded
 Error rate recorded
 Vertex AI results documented
 SageMaker results documented
 Baseline report archived for future comparison

SRE Tip: Save these baseline metrics in source control (for example, performance-baselines/day10.json). Future deployments can automatically compare against this baseline and fail the pipeline if p95 latency regresses by more than 20%.
