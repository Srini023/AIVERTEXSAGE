Dashboard Layout

Vertex AI Monitoring

┌─────────────────────────┐
│ P99 Latency             │
└─────────────────────────┘

┌─────────────────────────┐
│ Error Rate              │
└─────────────────────────┘


Widget 1: P99 Latency
Metric:
Prediction Latency

Metric Type:
aiplatform.googleapis.com/prediction/online/prediction_latencies

Configuration:
Aggregator: 99th Percentile
Alignment: 1 minute
Chart Type: Line

Visualization:
P99 Latency (ms)


Widget 2: Error Rate
Metric:
Prediction Requests

Filter:
response_code >= 400

Formula:
Error Rate %

=
Failed Requests
/
Total Requests
*
100


Visualization:

Create Dashboard via JSON
monitoring/cloud-monitoring/vertex-dashboard.json

{
  "displayName": "Vertex AI Endpoint Dashboard",
  "gridLayout": {
    "widgets": [
      {
        "title": "P99 Latency",
        "xyChart": {}
      },
      {
        "title": "Error Rate",
        "xyChart": {}
      }
    ]
  }
}

Import:
gcloud monitoring dashboards create \
  --config-from-file=monitoring/cloud-monitoring/vertex-dashboard.json



