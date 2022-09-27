import {Role} from "../../auth/roles/role.enum";

export interface UserI {
    id: number;
    username: string;
    email: string;
    role: Role;
    status: string;
    password?: string;
}