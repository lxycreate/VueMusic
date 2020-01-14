import Axios from "axios"

const service = Axios.create({
  baseURL: "/api",
  timeout: 5000
});

/**
 * 请求配置
 */
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

/**
 * 响应配置
 */
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

export default service;
