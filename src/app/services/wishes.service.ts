import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wishes } from '../models/wishes.model';


const baseUrl = "https://prestabookbackend-production.up.railway.app/api/wishes";

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Wishes[]>{
    return this.http.get<Wishes[]>(baseUrl);
  }

  getById(id:number): Observable<Wishes[]>{
    return this.http.get<Wishes[]>(`${baseUrl}/${id}`);
  }

  getByUser(id_user:number): Observable<Wishes[]>{
    return this.http.get<Wishes[]>(`${baseUrl}/user/${id_user}`)
  }

  create(data:any): Observable<any>{
    return this.http.post(baseUrl,data);
  }

  update(id:number, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  delete(id:number | undefined): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
