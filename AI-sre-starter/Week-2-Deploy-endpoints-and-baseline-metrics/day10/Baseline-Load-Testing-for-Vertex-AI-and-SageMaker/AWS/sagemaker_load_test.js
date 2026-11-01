import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 50,
  duration: '2m',
};

const ENDPOINT_URL = __ENV.ENDPOINT_URL;

const payload = JSON.stringify({
  text: "Hello SageMaker"
});

export default function () {

  const response = http.post(
    ENDPOINT_URL,
    payload,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  check(response, {
      'status is 200': (r) => r.status === 200,
  });
}
