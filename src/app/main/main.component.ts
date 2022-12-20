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
  random: number = 0;
  numrandomanterior: number = 0;
  libroAleatorio?: any ;
  generado: boolean = false;

  ngOnInit():void {

    this.BooksService.getAll().subscribe(result => { this.books = result.sort(function (a, b) {
      if (a.id! > b.id!) {
        return -1;
      }
      if (a.id! < b.id!) {
        return 1;
      }
      return 0;
    });}).closed;

  }

  generarLibroAleatorio(){

    do {

      let numLibros = Math.floor(Math.random() * this.books.length);
      this.random = numLibros;

    } while (this.numrandomanterior == this.random);

    this.numrandomanterior = this.random;
    this.libroAleatorio = this.books[this.random];
    this.generado = true;

  }

}
