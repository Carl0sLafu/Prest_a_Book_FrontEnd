import { Component, OnInit } from '@angular/core';
import { Books } from '../models/books.model';
import { BooksService } from '../services/books.service';
import { WroteService } from '../services/wrote.service';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { WishesService } from '../services/wishes.service';
import { Token } from '@angular/compiler';
import { Wrote } from '../models/wrote.model';
import { Users } from '../models/users.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private BooksService:BooksService, 
    private TokenStorage:TokenStorageService,
    private WroteService:WroteService,
    private WishesService:WishesService
    ){}

  book?: Books;
  id:any;
  wrote?: Wrote;

  ngOnInit():void{

    if (!this.TokenStorage.getToken()) {

      window.location.assign("../login-register");


    }
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.BooksService.getById(this.id).subscribe(result => this.book = result);
    this.WroteService.getByBook(this.id).subscribe(result => this.wrote = result);
  }

  toWishlist():void{
    console.log("hola");
    let user:Users = this.TokenStorage.getUser();
    console.log(user);
    let data:any={
      id_user:user,
      id_book:this.book
    }
    this.WishesService.create(data).subscribe();

  }
}
