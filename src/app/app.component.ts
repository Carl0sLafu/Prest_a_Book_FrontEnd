import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'prest-a-book';

  /*books: any = null;
  users: any = null;
  drawers: any = null;
  editorials: any = null;
  authors: any = null;

  constructor(private http: HttpClient){}

  ngOnInit(): void{
   this.http.get('https://prestabookbackend-production.up.railway.app/api/books').subscribe
   (res => this.books = res);

   this.http.get('https://prestabookbackend-production.up.railway.app/api/users').subscribe
   (res => this.users = res);

   this.http.get('https://prestabookbackend-production.up.railway.app/api/drawers').subscribe
   (res => this.drawers = res);
    
   this.http.get('https://prestabookbackend-production.up.railway.app/api/authors').subscribe
   (res => this.authors = res);


    this.http.get('https://prestabookbackend-production.up.railway.app/api/editorials').subscribe
    (res => this.editorials = res);
  }*/


  

}
