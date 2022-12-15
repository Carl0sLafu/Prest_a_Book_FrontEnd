import { Component, OnInit } from '@angular/core';
import { Books } from '../models/books.model';
import { BooksService } from '../services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private route: ActivatedRoute, private BooksService:BooksService){}

  book?: Books;
  id:any;

  ngOnInit():void{
    this.id = this.route.snapshot.paramMap.get('id');
    this.BooksService.getById(this.id).subscribe(result => console.log(result));
  }
}
