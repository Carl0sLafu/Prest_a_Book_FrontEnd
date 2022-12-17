import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';


@Component({
  selector: 'app-adminpanel-books',
  templateUrl: './adminpanel-books.component.html',
  styleUrls: ['./adminpanel-books.component.css']
})
export class AdminpanelBooksComponent implements OnInit {

  libros:any = null
  estasSeguro: any = false;

  constructor(private books: BooksService){}

  ngOnInit(): void{
    this.books.getAll().subscribe
    (res => this.libros = res);
    
  }
  borrarLibro(libroid:number){
    this.estasSeguro = window.confirm("¿Estás seguro?");
    console.log(libroid)
    if(this.estasSeguro){
          this.books.delete(libroid).subscribe();
    }

  }

}
