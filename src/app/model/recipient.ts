import {Country} from "./country";

export interface Recipient {

  id: number;
  name: string;
  address: string;
  city: string;
  zipCode: string;
  country: Country;
  isActive: boolean;
}
