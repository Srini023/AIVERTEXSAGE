
#!/bin/bash

mkdir -p monitoring/{vertex,sagemaker,reports,baselines}

echo "Collecting baseline metrics..."

DATE=$(date)

cat > monitoring/baselines/baseline_metrics.json <<EOF
{
  "capture_date":"$DATE",
  "environment":"baseline"
}
EOF

echo "Saving artifacts..."

cp latency.csv monitoring/reports/
cp results.json monitoring/reports/

echo "Baseline capture complete."

