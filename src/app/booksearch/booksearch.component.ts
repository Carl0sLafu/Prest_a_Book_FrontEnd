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
  ordenarBy: number = 0;

  ngOnInit():void{

    this.orderBooks();

  }

  orderBooks() {

    if (this.ordenarBy == 0) {

      this.BooksService.getAll().subscribe(result => this.books = result.sort(function (a, b) {
        if (a.title! > b.title!) {
          return 1;
        }
        if (a.title! < b.title!) {
          return -1;
        }
        return 0;
      }));

    } else if (this.ordenarBy == 1) {

      this.BooksService.getAll().subscribe(result => this.books = result.sort(function (a, b) {
        if (a.id! > b.id!) {
          return -1;
        }
        if (a.id! < b.id!) {
          return 1;
        }
        return 0;
      }));

    } else if (this.ordenarBy == 2) {

      this.BooksService.getAll().subscribe(result => this.books = result.sort(function (a, b) {
        if (a.num_pages! > b.num_pages!) {
          return 1;
        }
        if (a.num_pages! < b.num_pages!) {
          return -1;
        }
        return 0;
      }));

    }

  }

  
}
