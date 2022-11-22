import { httpService } from "./HttpService";
import LoginErrors from "./ErrorHandlers/LoginErrors";
import RegisterError from "./ErrorHandlers/RegisterError";

class AuthService {
  constructor() {
    this.axiosObj = httpService.axiosObj;
    this.setAxiosAuthorizationHeader();

    this.axiosObj.interceptors.request.use(function (config) {
      let token = localStorage.getItem("token");
      config.headers.Authorization = token ? `Bearer ${token}` : "";
      return config;
    });
  }

  setAxiosAuthorizationHeader(tokenParam = null) {
    let token = tokenParam ? tokenParam : localStorage.getItem("token");

    if (token) {
      httpService.axiosObj.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    }
  }

  getToken() {
    let tokenJSON = localStorage.getItem("token");
    const token = JSON.parse(tokenJSON);
    return token;
  }

  async login(data) {
    try {
      let response = await httpService.axiosObj.post("/login", data);
      if (response.data) {
        localStorage.setItem("token", response.data.authorisation.token);
        this.setAxiosAuthorizationHeader(response.data.authorisation.token);
        return response;
      }
    } catch (error) {
      return LoginErrors(error);
    }
  }

  async logout() {
    let response = await httpService.axiosObj.post("/logout");
    if (response.data) {
      localStorage.removeItem("token");
      // this.setAxiosAuthorizationHeader(null);
      console.log(response.data);
    }
  }
  async register(data) {
    try {
      let response = await httpService.axiosObj.post("/register", data);
      if (response.data) {
        localStorage.removeItem("token");
        localStorage.setItem("token", response.data.authorisation.token);
        this.setAxiosAuthorizationHeader(response.data.authorisation.token);
        return response;
      }
    } catch (error) {
      return RegisterError(error);
    }
  }

  async refresh() {
    try {
      const response = await this.axiosObj.post("/refresh");
      if (response.data) {
        localStorage.setItem("token", response.data.authorisation.token);
        this.setAxiosAuthorizationHeader(response.data.authorisation.token);
      }
      return response.data;
    } catch (error) {}
  }
}

export const authService = new AuthService();
