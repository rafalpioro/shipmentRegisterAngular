import {Recipient} from "./recipient";
import {Branch} from "./branch";
import {Project} from "./project";
import {Carrier} from "./carrier";
import {ShipmentStatus} from "./shipment-status";
import {User} from "./user";
import {TransactionType} from "./transaction-type";

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
  pod: boolean;
  mrn: string;
  user: User;
  transactionType: TransactionType;

}
