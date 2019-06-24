import {Recipient} from "./recipient";
import {Branch} from "./branch";
import {Project} from "./project";
import {Carrier} from "./carrier";
import {ShipmentStatus} from "./shipment-status";

export interface Shipment {

  id: number;
  recipient: Recipient ;
  branch: Branch ;
  project: Project ;
  sendDate: number;
  deliveryDate: number ;
  shipmentStatus: ShipmentStatus ;
  carrier: Carrier;
  isActive: boolean;

}
