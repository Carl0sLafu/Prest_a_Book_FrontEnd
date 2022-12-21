import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { UsersService } from '../services/users.service';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLE_KEY = 'auth-role';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private userService: UsersService) { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {

    var user = window.sessionStorage.getItem(USER_KEY);
    
    
    if(user!=null){

        this.reloadUserData(JSON.parse(user));
        user = window.sessionStorage.getItem(USER_KEY);

        if(user!=null){

          return JSON.parse(user!);

        }
    }
    
    return{};

  }

  private reloadUserData(user: any): any {

    this.userService.getById(user.id).subscribe(result => {

      this.saveUser(result);
      return true;

    },
    err=> {

      return false;

    });

  }

}
