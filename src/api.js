import axios from 'axios';
import {AppRoute} from './const';

const Error = {
  UNAUTHORIZED: 401
};

export const createAPI = (dispatch, history, setFalseRequestStatus) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;
    if (response.status === Error.UNAUTHORIZED) {
      dispatch();
      history.push(AppRoute.SIGN_IN);
      throw err;
    } else {
      setFalseRequestStatus();
      history.push(AppRoute.MAIN);
      throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
