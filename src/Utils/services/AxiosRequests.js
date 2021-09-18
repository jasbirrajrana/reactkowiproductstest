import axiosInstance from "./axiosInstance";

class AxiosRequests {
  get = (url, headers = {}) =>
    axiosInstance.get(url, headers).then((res) => res.data);
  post = (url, body, headers = {}) =>
    axiosInstance.post(url, body, headers).then(({ data }) => data);
  patch = (url, body, headers = {}) =>
    axiosInstance.patch(url, body, headers).then(({ data }) => data);
  delete = (url, headers = {}) =>
    axiosInstance.delete(url, headers).then(({ data }) => data);
};

export default new AxiosRequests();
