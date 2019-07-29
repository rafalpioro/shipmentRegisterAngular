import {Role} from "./role";

export interface User {

  id: number;
  name: string;
  password: string;
  email: string;
  active: boolean;
  role: Role;
}
