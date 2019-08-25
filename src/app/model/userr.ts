import {Role} from "./role";

export interface Userr {

  id: number;
  name: string;
  password: string;
  email: string;
  active: boolean;
  role: Role;
}
