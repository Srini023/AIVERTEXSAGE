import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 50,
  duration: '2m',

  thresholds: {

    // Global latency targets
    http_req_duration: [
      'p(50)<500',
      'p(95)<1000',
      'p(99)<2000'
    ],

    // Error budget
    http_req_failed: [
      'rate<0.01'
    ],

    // Request success rate
    checks: [
      'rate>0.99'
    ]
  }
};

export default function () {

  if (__ITER % 2 === 0) {

    let vertex = http.post(
      __ENV.VERTEX_URL,
      JSON.stringify({
        instances: [{ text: "test" }]
      }),
      {
        headers: {
          Authorization: `Bearer ${__ENV.GCP_TOKEN}`,
          'Content-Type': 'application/json'
        },
        tags: { endpoint: 'vertex' }
      }
    );

    check(vertex, {
      'vertex_200': (r) => r.status === 200
    });

  } else {

    let sm = http.post(
      __ENV.SAGEMAKER_URL,
      JSON.stringify({
        text: "test"
      }),
      {
        headers: {
          'Content-Type': 'application/json'
        },
        tags: { endpoint: 'sagemaker' }
      }
    );

    check(sm, {
      'sagemaker_200': (r) => r.status === 200
    });
  }
}
