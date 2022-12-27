import { Editorials } from "./editorials.model";
import { Users } from "./users.model";

export class Books {
    id?: number;
    isbn?: string;
    title?: string;
    num_pages?: number;
    genre?: string;
    description?:string;
    img?: string;
    id_editorial?: Editorials;
    id_user?: Users;
    id_drawer?: {
        id?: string;
        container?: {
            id?: number;
            container_name?: string;
        };
    }
}