import { Component, OnInit } from '@angular/core';
import { Books } from '../models/books.model';
import { BooksService } from '../services/books.service';
import { WroteService } from '../services/wrote.service';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { WishesService } from '../services/wishes.service';
import { LoansService } from '../services/loans.service';
import { Token } from '@angular/compiler';
import { Wrote } from '../models/wrote.model';
import { Users } from '../models/users.model';
import { Wishes } from '../models/wishes.model';
import { Loans } from '../models/loans.model';
import {finalize} from 'rxjs/operators';

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
    private WishesService:WishesService,
    private LoansService:LoansService
    ){}

  book?: Books;
  id:any;
  wrote?: Wrote;
  user?:Users;
  wish?:Wishes;
  requested?:Loans;

  ngOnInit():void{
    if (!this.TokenStorage.getToken()) {
      window.location.assign("../login-register");
    }
    this.id = this.route.snapshot.paramMap.get('id');
    this.user = this.TokenStorage.getUser();
    this.checkRequest();
    this.sendRequests();
  }

  toWishlist():void{
    let user:Users = this.TokenStorage.getUser();
    let data:any={
      id_user:user,
      id_book:this.book
    }
    this.WishesService.create(data).pipe(finalize( () => this.checkWishlist())).subscribe();
    this.checkWishlist();
    this.sendRequests();
  }

  checkWishlist(){
    this.WishesService.getByUserAndBook(this.user?.id, this.id).subscribe(result => this.wish = result);
    //this.sendRequests();
  }

  deleteFromWishlist(){
    this.WishesService.delete(this.wish?.id).subscribe();
    this.sendRequests();
  }

  sendRequests(){
    this.WroteService.getByBook(this.id).subscribe(result => this.wrote = result);
    this.BooksService.getById(this.id).pipe(finalize( () => this.checkWishlist())).subscribe(result => this.book = result);
  }

  loanRequest(){
    const inicio = new Date();
    const fin = inicio.setMonth(inicio.getMonth() + 1);
    let loan:Loans = {
      id_book:this.book,
      id_loaner:this.book?.id_user,
      starting_date: new Date().toISOString(),
      end_date: new Date().toISOString(),
      active: false,
      id_loanee: this.user,
    }
    console.log(loan);
    this.LoansService.create(loan).pipe(finalize( () => this.checkRequest())).subscribe();
  }

  checkRequest(){
    this.LoansService.getByLoaneeAndBook(this.user?.id, this.id).subscribe( result => this.requested = result );
  }
}
