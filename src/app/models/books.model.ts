export class Books {
    id?: number;
    isbn?: string;
    title?: string;
    num_pages?: number;
    genre?: string;
    img?: string;
    id_editorial?: {
        id: 1;
        editorial_name: string;
        country: string;
        id_user: {
            id?: number;
            username?: string;
            psswd?: string;
            email?: string;
            real_name?: string;
            surname?: string;
            birth_date?: Date;
            gender?: string;
            id_role?: {
                id?: number;
                role_name?:string;
            };
        };
    };
    id_user?: {
        id?: number;
        username?: string;
        psswd?: string;
        email?: string;
        real_name?: string;
        surname?: string;
        birth_date?: Date;
        gender?: string;
        id_role?: {
            id?: number;
            role_name?: string;
        };
    };
    id_drawer?: {
        id?: string;
        container?: {
            id?: number;
            container_name?: string;
        };
    }
}