import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Auth } from 'aws-amplify';
// import momentTz from 'moment-timezone';
import set from 'lodash/set';

const baseURL = `${process.env.REACT_APP_HOSTNAME}/api/v1`;
const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // 'x-timezone': momentTz.tz.guess(),
  },
});

instance.interceptors.request.use(async function (config) {
  const { headers, ...res } = config;

  if (!headers.publicCall) {
    const session = await Auth.currentSession();
    const { jwtToken } = session.idToken;
    set(res, 'headers.Authorization', jwtToken ? `Bearer ${jwtToken}` : '');
  }
  return res;
});

export default instance;
export { AxiosResponse, AxiosRequestConfig };
