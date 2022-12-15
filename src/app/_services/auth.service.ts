import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const LOGIN_API = "https://prestabookbackend-production.up.railway.app/login";
const REGISTER_API = "https://prestabookbackend-production.up.railway.app/api/users";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  user: any = null;

  login(
    
    username: string, 
    psswd: string
    
    ): Observable<any> {

    this.user = null;

    this.user = {username: username, psswd: psswd};

    return this.http.post(LOGIN_API, JSON.stringify(this.user), httpOptions);

  }

  register(

    username: string,
    psswd: string,
    email: string,
    real_name:string,
    surname: string | null,
    birth_date: Date | null,
    gender: string | null,
    id: number

    ): Observable<any> {
    
    this.user = null;

    this.user = {
      username: username,
      psswd: psswd,
      email: email,
      real_name: real_name,
      surname: surname,
      birth_date: birth_date,
      gender: gender,
      id_role: {
        id: id
      }

    };
    
    return this.http.post(REGISTER_API, JSON.stringify(this.user), httpOptions);
  }
}
