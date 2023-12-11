import axios, { AxiosResponse, AxiosError } from "axios";
import { toast } from "react-toastify";
import { router } from "./Routes";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const responseBody = (response: AxiosResponse) => response.data;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;

    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key]);
            }
          }
          throw modelStateErrors.flat();
        }
        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 404:
        toast.error(data.title);
        break;
      case 403:
        toast.error("You are not allowed to do that!");
        break;
      case 500:
        router.navigate("/server-error", { state: { error: data } });
        break;
      default:
        break;

        return Promise.reject(error.response);
    }
  }
);

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
  get2: (url: string) => axios.get(url),
  put2: (url: string, body: object) => axios.put(url, body),
};

const Item = {
  getItem: (value: number) => requests.get("items/" + value),
  createItem: (values: object) => requests.post("items", values),
  listItems: () => requests.get("items"),
  updateItem: (values: object, index:number) => requests.put("items/" + index, values),
};

const Account = {
  login: (values: any) => requests.post("account/login", values),
  register: (values: any) => requests.post("account/register", values),
  currentUser: () => requests.get("account/currentUser"),
};
const Location = {
  getLocation: (value: number) => requests.get("locations" + value),
  createLocation: (values: object) => requests.post("locations", values),
  listLocations: () => requests.get("locations"),
  updateLocation: (values: object, index:number) =>
    requests.put("locations/" + index, values),
};

const Customer = {
  getCustomer: (value:number) => requests.get("customers/"+value),
  createCustomer:(values: object) => requests.post("customers", values),
  listCustomers:() => requests.get("customers"),
  updateCustomer:(values: object, index:number) => requests.put("customers/"+ index, values)
}
const CustomerLocation = {
  getCustomerLocations: (value:number) => requests.get("customerLocations/"+value),
  createCustomerLocation:(values: object) => requests.post("customerLocations", values),
  listCustomerLocations:() => requests.get("customerLocations"),
  updateCustomerLocation:(values: object, index:number) => requests.put("customerLocations/"+ index, values)
}

const Maintenance = {
  getMaintenance: (value: number) => requests.get("maintenances/" + value),
  createMaintenance: (values: object) => requests.post("maintenances", values),
  listMaintenances: () => requests.get("maintenances"),
  updateMaintenance: (values: object, index:number) => requests.put("maintenances/" + index, values),

}

const MaintenanceDate = {
  getMaintenanceDate: (value: number) => requests.get("maintenanceDates/" + value),
  createMaintenanceDate: (values: object) => requests.post("maintenanceDates", values),
  listMaintenanceDates: () => requests.get("maintenanceDates"),
  updateMaintenanceDate: (values: object, index:number) => requests.put("maintenanceDates/" + index, values),

}

const MaintenanceMan = {
  getMaintenanceMan: (value: number) => requests.get("maintenanceMen/" + value),
  createMaintenanceMan: (values: object) => requests.post("maintenanceMen", values),
  listMaintenanceMen: () => requests.get("maintenanceMen"),
  updateMaintenanceMan: (values: object, index:number) => requests.put("maintenanceMen/" + index, values),

}
const MaintenanceItem = {
  getMaintenanceItem: (value: number) => requests.get("maintenanceItems/" + value),
  createMaintenanceItem: (values: object) => requests.post("maintenanceItems", values),
  listMaintenanceItems: () => requests.get("maintenanceItems"),
  updateMaintenanceItem: (values: object, index:number) => requests.put("maintenanceItems/" + index, values),

}

const agent = {
  Item,
  Location,
  Customer,
  CustomerLocation,
  Maintenance,
  MaintenanceDate,
  MaintenanceItem,
  MaintenanceMan,
  Account,
};

export default agent;
