export class Loans {
    id?: number;
    id_book?: {
        id?: number;
        isbn?: string;
        title?: string;
        num_pages?: number;
        genre?: string;
        id_editorial?: {
            id?: number;
            editorial_name?: string;
            country?: string;
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
        };
    };
    id_loaner?: {
        id?: number;
        username?:string;
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
    id_loanee?: {
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
    starting_date?: Date;
    end_date?: Date;
}

