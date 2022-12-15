import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loans } from '../models/loans.model';

const baseUrl = "https://prestabookbackend-production.up.railway.app/api/loan";

@Injectable({
  providedIn: 'root'
})

export class LoansService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<Loans[]>{
    return this.http.get<Loans[]>(baseUrl);
  }

  getById(id:number): Observable<Loans[]>{
    return this.http.get<Loans[]>(`${baseUrl}/${id}`);
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