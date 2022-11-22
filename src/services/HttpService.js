import axios from "axios";

export class HttpService {
  constructor() {
    this.axiosObj = axios.create({
      baseURL: "http://127.0.0.1:8000/api",
    });
  }

  attachAuthorizationHeader = (token) => {
    this.axiosObj.defaults.headers.common["Authorization"] = token;
  };
}

export const httpService = new HttpService();
