import {Country} from "./country";

export interface Branch {

  id: number;
  name: string;
  city: string;
  zipCode: string;
  address: string;
  country: Country;
}
