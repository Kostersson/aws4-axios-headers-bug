import axios from "axios";
import { aws4Interceptor } from "aws4-axios";

const interceptor = aws4Interceptor({
  options: {
    region: "eu-west-2",
    service: "execute-api",
  },
});

axios.interceptors.request.use(interceptor);


axios.post("https://example.com/foo", '', {
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
}).catch(e => {
  // Object [AxiosHeaders] {
  //   'Accept: application/json, text/plain, */*\nContent-Type: application/json': undefined
  // }
  console.log(e.config._originalHeaders)
});
