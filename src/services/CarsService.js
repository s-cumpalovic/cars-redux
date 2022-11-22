import { httpService } from "./HttpService";
import CarsErrors from "./ErrorHandlers/CarsErrors";

class CarsService {
  constructor() {
    this.axiosObj = httpService.axiosObj;
  }

  async getAll() {
    try {
      const response = await this.axiosObj.get("/cars");
      return response;
    } catch (error) {
      return CarsErrors(error);
    }
  }

  async create(obj) {
    try {
      const response = await this.axiosObj.post("/cars", obj);
      return response;
    } catch (error) {
      return CarsErrors(error);
    }
  }

  async get(id) {
    try {
      const response = await this.axiosObj.get(`/cars/${id}`);
      return response;
    } catch (error) {
      return CarsErrors(error);
    }
  }

  async edit(id, car) {
    try {
      const response = await this.axiosObj.put(`/cars/${id}`, car);
      return response;
    } catch (error) {
      return CarsErrors(error);
    }
  }

  async delete(id) {
    try {
      const response = await this.axiosObj.delete(`/cars/${id}`);
      return response;
    } catch (error) {
      return CarsErrors(error);
    }
  }
}

export default new CarsService();
