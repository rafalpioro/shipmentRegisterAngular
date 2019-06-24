import {Country} from "./country";

export interface Client {


  id: number;
  name: string;
  address: string;
  city: string;
  zipCode: string;
  country: Country;
  isActive: boolean;
}
