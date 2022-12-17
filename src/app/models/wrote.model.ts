import { Authors } from "./authors.model";
import { Books } from "./books.model";
import { Editorials } from "./editorials.model";

export class Wrote {
    id?:number;
    id_author?: Authors;
    book?:Books;
}
