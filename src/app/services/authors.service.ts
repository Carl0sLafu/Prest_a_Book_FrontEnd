import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authors } from '../models/authors.model';

const baseUrl = "https://prestabookbackend-production.up.railway.app/api/authors";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Authors[]>{
    return this.http.get<Authors[]>(baseUrl);
  }

  getById(id:number): Observable<Authors[]>{
    return this.http.get<Authors[]>(`${baseUrl}/${id}`);
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

  getByName(name:string): Observable<Authors>{
    return this.http.get<Authors>(`${baseUrl}/name/${name}`);
  }

  getBySurname(surname:string): Observable<Authors>{
    return this.http.get(`${baseUrl}/surname/${surname}`);
  }
}
