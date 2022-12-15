import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../models/books.model';

const baseUrl = "https://prestabookbackend-production.up.railway.app/api/books";

@Injectable({
  providedIn: 'root'
})

export class BooksService {



  constructor(private http: HttpClient) { }

  getAll(): Observable<Books[]>{
    return this.http.get<Books[]>(baseUrl);
  }

  getById(id:number): Observable<Books>{
    return this.http.get<Books>(`${baseUrl}/${id}`);
  }

  create(data:any): Observable<any>{
    return this.http.post(baseUrl,data);
  }

  update(id:number, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  delete(id:number): Observable<any>{
    return this.http.delete<any>(`${baseUrl}/${id}`);
  }

  getByTitle(title:string): Observable<Books>{
    return this.http.get<Books>(`${baseUrl}/title/${title}`);
  }

  getByIsbn(isbn:string): Observable<Books>{
    return this.http.get(`${baseUrl}/isbn/${isbn}`);
  }

}
