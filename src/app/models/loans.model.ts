import { Books } from "./books.model";
import { Editorials } from "./editorials.model";
import { Users } from "./users.model";

export class Loans {
    id?: number;
    id_book?: Books;
    id_loaner?: Users;
    id_loanee?: Users;
    starting_date?: any;
    end_date?: any;
    active?:boolean;
}

