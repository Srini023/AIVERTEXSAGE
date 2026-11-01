Dashboard Acceptance Criteria
 Endpoint health visible
 p50/p95/p99 latency tracked
 CPU utilization tracked
 Memory utilization tracked
 GPU utilization tracked (if applicable)
 Instance/replica count visible
 Error breakdown visible
 Deployment annotations configured
 Baseline comparison panel configured
 Alerting rules defined

monitoring/
└── grafana/
    ├── dashboards/
    │   └── ml-endpoints.json
    │
    └── provisioning/
        └── dashboards.yaml

monitoring/reports/
├── cpu_baseline.png
├── memory_baseline.png
├── latency_baseline.png
└── baseline_report.md

SRE Outcome: You now have a production-ready observability stack that combines load-test baselines (Day 10), resource utilization metrics (Day 11), deployment tracking, rollback visibility, and latency/error alerting for both Vertex AI and SageMaker endpoints.
