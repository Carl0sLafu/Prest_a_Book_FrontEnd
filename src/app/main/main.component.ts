import { Component } from '@angular/core';
import { Books } from '../models/books.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private BooksService:BooksService){}

  books: Books[] = [];
  count: number = 3;

  ngOnInit():void {

    this.BooksService.getAll().subscribe(result => this.books = result);

  }

}
