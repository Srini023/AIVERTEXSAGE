import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 50,
  duration: '2m',
};

export default function () {

  if (__ITER % 2 === 0) {

      const vertex = http.post(
          __ENV.VERTEX_URL,
          JSON.stringify({
              instances: [{text:"test"}]
          }),
          {
            headers: {
              Authorization: `Bearer ${__ENV.GCP_TOKEN}`,
              'Content-Type':'application/json'
            }
          }
      );

      check(vertex, {
          'vertex status': (r) => r.status === 200
      });

  } else {

      const sm = http.post(
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

      check(sm, {
          'sagemaker status': (r) => r.status === 200
      });
  }
}
