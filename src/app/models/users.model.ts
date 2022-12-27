export class Users {
    id?: number;
    username?: string;
    psswd?: string;
    email?:string;
    real_name?: string;
    surname?: string;
    birth_date?: Date;
    gender?: string;
    id_role?: {
        id?: number;
        role_name?: string;
    };
}
