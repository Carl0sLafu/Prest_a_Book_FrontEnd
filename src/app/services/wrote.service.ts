import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wrote } from '../models/wrote.model';

const baseUrl = "https://prestabookbackend-production.up.railway.app/api/wrote";

@Injectable({
  providedIn: 'root'
})
export class WroteService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Wrote[]>{
    return this.http.get<Wrote[]>(baseUrl);
  }

  getById(id:number): Observable<Wrote[]>{
    return this.http.get<Wrote[]>(`${baseUrl}/${id}`);
  }

  getByBook(id_book:number): Observable<Wrote>{
    return this.http.get<Wrote>(`${baseUrl}/book/${id_book}`);
  }

  create(data:any): Observable<any>{
    return this.http.post(baseUrl,data);
  }

  update(id:number, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  delete(id:number): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
