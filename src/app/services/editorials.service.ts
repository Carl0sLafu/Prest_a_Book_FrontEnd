import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editorials } from '../models/editorials.model';

const baseUrl = "https://prestabookbackend-production.up.railway.app/api/editorials";

@Injectable({
  providedIn: 'root'
})
export class EditorialsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Editorials[]>{
    return this.http.get<Editorials[]>(baseUrl);
  }

  getById(id:number): Observable<Editorials[]>{
    return this.http.get<Editorials[]>(`${baseUrl}/${id}`);
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

  getByName(name:string): Observable<Editorials>{
    return this.http.get<Editorials>(`${baseUrl}/name/${name}`);
  }

}
