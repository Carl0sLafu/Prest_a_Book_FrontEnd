import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-adminpanel-books',
  templateUrl: './adminpanel-books.component.html',
  styleUrls: ['./adminpanel-books.component.css']
})
export class AdminpanelBooksComponent implements OnInit {

  libros:any = null
  estasSeguro: any = false;

  mensaje: string = '';
  bookid: number = 0;

  constructor(private books: BooksService){}

  ngOnInit(): void{
    this.recibirLibros();
    
  }
  borrarLibro(libro_id:number){

    this.mensaje = "¿Estás seguro?";
    this.bookid = libro_id

  }

  borradoDefinitivo() {

    this.mensaje = "Libro borrado correctamente";
    this.books.delete(this.bookid).pipe(finalize( () => this.recibirLibros())).subscribe();

  }

  recibirLibros(){
    this.books.getAll().subscribe
    (res => this.libros = res);
  }
}
