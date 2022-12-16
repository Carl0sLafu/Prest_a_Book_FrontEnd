import { Books } from "./books.model";
import { Users } from "./users.model";

export class Wishes {
    id?:number;
    id_user?:Users;
    id_book?:Books;
}
