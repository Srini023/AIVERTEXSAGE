import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 50,
  duration: '2m',
};

const TOKEN = __ENV.TOKEN;
const ENDPOINT_URL = __ENV.ENDPOINT_URL;

const payload = JSON.stringify({
  instances: [
    {
      text: "Hello Vertex AI"
    }
  ]
});

export default function () {

  const response = http.post(
    ENDPOINT_URL,
    payload,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    }
  );

  check(response, {
    'status is 200': (r) => r.status === 200,
  });
}
