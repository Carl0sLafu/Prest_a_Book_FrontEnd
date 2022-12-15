import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';


@Component({
  selector: 'app-adminpanel-books',
  templateUrl: './adminpanel-books.component.html',
  styleUrls: ['./adminpanel-books.component.css']
})
export class AdminpanelBooksComponent implements OnInit {

  libros:any = null

  constructor(private books: BooksService){}

  ngOnInit(): void{
    this.books.getAll().subscribe
    (res => this.libros = res);
    
  }


}
