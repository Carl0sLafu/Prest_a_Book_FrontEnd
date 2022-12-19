import { Component, OnInit } from '@angular/core';
import { Books } from '../models/books.model';
import { BooksService } from '../services/books.service';
import { Wrote } from '../models/wrote.model';
import { WroteService } from '../services/wrote.service';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit{

  constructor(private BooksService:BooksService, private WroteService:WroteService){}

  librosParaCargarend:number = 10;
  librosParaCargarstart:number = 0;
  page: number = 1;
  books?: Books[];
  wrote?: Wrote[];
  LibrosEncontrados: Books[] = [];
  ordenarBy: number = 0;
  titleSearch: string = '';
  authorSearch: string = '';
  estaBuscando: boolean = false;
  estaHaciendoScroll: boolean = false;
  isMaxLenght: boolean = false;

  ngOnInit():void{

    this.orderBooks();
    this.WroteService.getAll().subscribe(res=>{this.wrote = res;});

  }

  orderBooks() {

    if (this.ordenarBy == 0) {

      this.BooksService.getAll().subscribe(result => { this.books = result.sort(function (a, b) {
        if (a.title! > b.title!) {
          return 1;
        }
        if (a.title! < b.title!) {
          return -1;
        }
        return 0;
      });}).closed;

    } else if (this.ordenarBy == 1) {

      this.BooksService.getAll().subscribe(result => { this.books = result.sort(function (a, b) {
        if (a.title! > b.title!) {
          return -1;
        }
        if (a.title! < b.title!) {
          return 1;
        }
        return 0;
      });}).closed

    } else if (this.ordenarBy == 2) {

      this.BooksService.getAll().subscribe(result => { this.books = result.sort(function (a, b) {
        if (a.id! > b.id!) {
          return -1;
        }
        if (a.id! < b.id!) {
          return 1;
        }
        return 0;
      });}).closed

    } else if (this.ordenarBy == 3) {

      this.BooksService.getAll().subscribe(result => { this.books = result.sort(function (a, b) {
        if (a.id! > b.id!) {
          return 1;
        }
        if (a.id! < b.id!) {
          return -1;
        }
        return 0;
      });}).closed

    } else if (this.ordenarBy == 4) {

      this.BooksService.getAll().subscribe(result => { this.books = result.sort(function (a, b) {
        if (a.num_pages! > b.num_pages!) {
          return 1;
        }
        if (a.num_pages! < b.num_pages!) {
          return -1;
        }
        return 0;
      });}).closed

    } else if (this.ordenarBy == 5) {

      this.BooksService.getAll().subscribe(result => { this.books = result.sort(function (a, b) {
        if (a.num_pages! > b.num_pages!) {
          return -1;
        }
        if (a.num_pages! < b.num_pages!) {
          return 1;
        }
        return 0;
      });}).closed

    }

  }

  searchByTitle() {

    this.authorSearch = '';

    this.estaBuscando = (this.titleSearch != '')?true:false;

    this.LibrosEncontrados = [];

    this.books?.forEach(book => {
      if (book.title?.toLocaleLowerCase().includes(this.titleSearch.toLocaleLowerCase())) {
        this.LibrosEncontrados.push(book);
      }
    });

  }

  searchByAuthor() {

    this.titleSearch = '';

    this.estaBuscando = (this.authorSearch != '')?true:false;

    this.LibrosEncontrados = [];

    this.wrote?.forEach(result => {

      if (result.id_author?.name?.toLocaleLowerCase().includes(this.authorSearch.toLocaleLowerCase())) {

        this.books?.forEach(bookSearch => {
          if (bookSearch.id == result.book?.id) {

            this.LibrosEncontrados.push(bookSearch);

          }

        });

      }

    });

  }

  comprobarLength(subir:boolean, plus:number) {

    if (subir) {

      this.librosParaCargarstart += 10 * plus;
      this.librosParaCargarend += 10 * plus;
      this.page += plus;

    } else {

      this.librosParaCargarstart -= 10 * plus;
      this.librosParaCargarend -= 10 * plus;
      this.page -= plus;

    }

    console.log(this.librosParaCargarend);

  }

    
}
  

