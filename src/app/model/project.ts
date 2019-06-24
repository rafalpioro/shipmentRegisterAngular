import {Client} from "./client";
import {ProjectStatus} from "./project-status";

export interface Project {

  id: number;
  number: string;
  name: string;
  client: Client;
  projectStatus: ProjectStatus;
  startDate: number;
  endDate: number;
  isActive: boolean;
}
