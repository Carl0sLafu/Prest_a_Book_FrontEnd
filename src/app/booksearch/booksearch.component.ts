import { Component, OnInit } from '@angular/core';
import { Books } from '../models/books.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit{

  constructor(private BooksService:BooksService){}

  books?: Books[];

  ngOnInit():void{
    this.BooksService.getAll().subscribe(result => this.books = result);
  }

  
}
