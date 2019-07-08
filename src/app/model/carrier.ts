import {CarrierType} from "./carrier-type";

export interface Carrier {

  id: number;
  name: string;
  isActive: boolean;
  carrierType: CarrierType;
}
