import http from 'k6/http';
import { Trend } from 'k6/metrics';

const vertexLatency = new Trend('vertex_latency');
const sagemakerLatency = new Trend('sagemaker_latency');

export const options = {

  vus: 50,
  duration: '2m',

  thresholds: {

    vertex_latency: [
      'p(95)<800',
      'p(99)<1500'
    ],

    sagemaker_latency: [
      'p(95)<1000',
      'p(99)<2000'
    ],

    http_req_failed: [
      'rate<0.01'
    ]
  }
};

export default function () {

  if (__ITER % 2 === 0) {

    let r = http.post(
      __ENV.VERTEX_URL,
      JSON.stringify({
        instances:[{text:"test"}]
      }),
      {
        headers:{
          Authorization:`Bearer ${__ENV.GCP_TOKEN}`,
          'Content-Type':'application/json'
        }
      }
    );

    vertexLatency.add(r.timings.duration);

  } else {

    let r = http.post(
      __ENV.SAGEMAKER_URL,
      JSON.stringify({
        text:"test"
      }),
      {
        headers:{
          'Content-Type':'application/json'
        }
      }
    );

    sagemakerLatency.add(r.timings.duration);

  }
}
