export class Editorials {
    id?:number;
    country?:string;
    id_user?: {
        id?:number;
        username?:string;
        psswd?:string;
        email?:string;
        real_name?:string;
        surname?:string;
        birth_date?:Date;
        gender?:string;
        id_role?: {
            id?:number;
            role_name?:string;
        };
    };
    editorial_name?:string;
}
