Day 11 Acceptance Criteria
Metrics
 CPU utilization captured
 Memory utilization captured
 GPU utilization captured (if used)
 Instance/Replica counts recorded
Graphs
 CPU baseline graph generated
 Memory baseline graph generated
 Latency baseline graph generated
 Instance count graph generated
Repository Artifacts
 monitoring/baselines/baseline_metrics.json
 monitoring/reports/cpu_baseline.png
 monitoring/reports/memory_baseline.png
 monitoring/reports/latency_baseline.png
 monitoring/reports/instance_count.png
 monitoring/reports/baseline_report.md


SRE Outcome
Plain Text
Baseline Captured      YES
Monitoring Artifacts   SAVED
Reference Metrics      ESTABLISHED
Ready for Trend Analysis and Alerting  YES

Ready for Trend Analysis and Alerting YES

SRE Tip: Commit the entire monitoring/ folder to source control after every validated release. Future deployments can compare against these baselines and automatically fail if CPU, memory, p95 latency, or error rates regress beyond an agreed threshold (for example, +20%).


