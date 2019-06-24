import {Role} from "./role";

export interface User {

  id: number;
  name: string;
  password: string;
  email: string;
  isActive: boolean;
  role: Role;
}
