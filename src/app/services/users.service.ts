import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';

const baseUrl = "https://prestabookbackend-production.up.railway.app/api/users";

@Injectable({
  providedIn: 'root'
})

export class UsersService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<Users[]>{
    return this.http.get<Users[]>(baseUrl);
  }

  getById(id:number): Observable<Users>{
    return this.http.get(`${baseUrl}/${id}`);
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

  getByUsername(username:string): Observable<Users>{
    return this.http.get(`${baseUrl}/username/${username}`);
  }

}