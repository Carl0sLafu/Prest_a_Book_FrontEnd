import { Component, OnInit } from '@angular/core';
import { Books } from '../models/books.model';
import { BooksService } from '../services/books.service';
import { Wrote } from '../models/wrote.model';
import { WroteService } from '../services/wrote.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit{

  constructor(private BooksService:BooksService, private WroteService:WroteService){}

  librosParaCargarstart:number = 0;
  librosParaCargarend:number = 0;
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
  isFetching:boolean = true;

  ngOnInit():void{

    this.orderBooks();
    this.WroteService.getAll().pipe(finalize(() => this.getAllBooksLength())).subscribe(res=>{this.wrote = res;});

  }

  orderBooks() {

    if (this.ordenarBy == 0) {

      this.BooksService.getAll().pipe(finalize( () => this.getAllBooksLength())).subscribe(result => { this.books = result.sort(function (a, b) {
        if (a.title!.toLocaleLowerCase() > b.title!.toLocaleLowerCase()) {
          return 1;
        }
        if (a.title! < b.title!) {
          return -1;
        }
        return 0;
      });});

    } else if (this.ordenarBy == 1) {

      this.BooksService.getAll().pipe(finalize( () => this.getAllBooksLength())).subscribe(result => { this.books = result.sort(function (a, b) {
        if (a.title!.toLocaleLowerCase() > b.title!.toLocaleLowerCase()) {
          return -1;
        }
        if (a.title! < b.title!) {
          return 1;
        }
        return 0;
      });});

    } else if (this.ordenarBy == 2) {

      this.BooksService.getAll().pipe(finalize( () => this.getAllBooksLength())).subscribe(result => { this.books = result.sort(function (a, b) {
        if (a.id! > b.id!) {
          return -1;
        }
        if (a.id! < b.id!) {
          return 1;
        }
        return 0;
      });});

    } else if (this.ordenarBy == 3) {

      this.BooksService.getAll().pipe(finalize( () => this.getAllBooksLength())).subscribe(result => { this.books = result.sort(function (a, b) {
        if (a.id! > b.id!) {
          return 1;
        }
        if (a.id! < b.id!) {
          return -1;
        }
        return 0;
      });});

    } else if (this.ordenarBy == 4) {

      this.BooksService.getAll().pipe(finalize( () => this.getAllBooksLength())).subscribe(result => { this.books = result.sort(function (a, b) {
        if (a.num_pages! > b.num_pages!) {
          return 1;
        }
        if (a.num_pages! < b.num_pages!) {
          return -1;
        }
        return 0;
      });});

    } else if (this.ordenarBy == 5) {

      this.BooksService.getAll().pipe(finalize( () => this.getAllBooksLength())).subscribe(result => { this.books = result.sort(function (a, b) {
        if (a.num_pages! > b.num_pages!) {
          return -1;
        }
        if (a.num_pages! < b.num_pages!) {
          return 1;
        }
        return 0;
      });});

    }

  }

  getAllBooksLength() {
    this.isFetching=false;
    if (this.books?.length! < 12) {
      this.librosParaCargarend = this.books?.length!;
    } else {
      this.librosParaCargarend = 12;
    }

  }

  searchByTitle() {

    this.librosParaCargarstart = 0;
    this.librosParaCargarend = 0;
    this.page = 1;
    this.authorSearch = '';

    this.estaBuscando = (this.titleSearch != '')?true:false;

    this.LibrosEncontrados = [];

    this.books?.forEach(book => {
      if (book.title?.toLocaleLowerCase().includes(this.titleSearch.toLocaleLowerCase())) {
        this.LibrosEncontrados.push(book);
        if (this.librosParaCargarend != 12) {

          this.librosParaCargarend++;

        }
      }
    });

    if (this.librosParaCargarend == 0) {

      this.librosParaCargarstart = -1;

    }

  }

  searchByAuthor() {

    this.librosParaCargarstart = 0;
    this.librosParaCargarend = 0;
    this.page = 1;
    this.titleSearch = '';

    this.estaBuscando = (this.authorSearch != '')?true:false;

    this.LibrosEncontrados = [];

    this.wrote?.forEach(result => {

      if (result.id_author?.name?.toLocaleLowerCase().includes(this.authorSearch.toLocaleLowerCase())) {

        this.books?.forEach(bookSearch => {
          if (bookSearch.id == result.book?.id) {

            this.LibrosEncontrados.push(bookSearch);

            if (this.librosParaCargarend != 12) {

              this.librosParaCargarend++;

            }

          }

        });

      }

    });

    if (this.librosParaCargarend == 0) {

      this.librosParaCargarstart = -1;

    }

  }

  comprobarLength(subir:boolean, plus:number) {

    window.scrollTo(scrollX, 0);

    if (subir) {

      this.librosParaCargarstart += 12 * plus;
      if ((this.librosParaCargarend + (12*plus) > this.books!.length && !this.estaBuscando)
      || (this.librosParaCargarend + (12*plus) > this.LibrosEncontrados!.length && this.estaBuscando)) {

        this.librosParaCargarend = this.books!.length;

      } else {

        this.librosParaCargarend += 12 * plus;

      }

      this.page += plus;

    } else {

      this.librosParaCargarstart -= 12 * plus;
      if (this.librosParaCargarend - (12 * plus) < 12) {

        this.librosParaCargarend = 12;

      } else {
        
        this.librosParaCargarend -= 12 * plus;

      }
      this.page -= plus;

    }

  }

    
}
  

