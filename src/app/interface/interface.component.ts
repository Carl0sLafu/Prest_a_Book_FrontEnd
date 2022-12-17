import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';
import { UsersService } from '../services/users.service';
import { WishesService } from '../services/wishes.service';
import { BooksService } from '../services/books.service';
import { Wishes } from '../models/wishes.model';
import { Books } from '../models/books.model';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  constructor (
    private token: TokenStorageService, 
    private auth: AuthService, 
    private usersService: UsersService, 
    private wishesService: WishesService,
    private booksService: BooksService ) {}

  editarPerfil: boolean = false;
  user: any = null;
  modificacionExitosa: boolean = false;
  error: string = '';
  wishlist?:Wishes[];
  published?:Books[];

  modifyUser: any = {
    username: null,
    email: null,
    birth: null,
    trueName: null, 
    surname: null, 
    gender: null
  };

  ngOnInit(): void {
    if(!this.token.getToken()) {
      
      window.location.assign("..");

    }
    
    this.user = this.token.getUser();
    this.recargarUserData();
    this.wishesService.getByUser(this.user.id).subscribe( result => this.wishlist = result);
    this.booksService.getByOwner(this.user.id).subscribe( result => this.published = result);

  }

  deleteWish(id:number | undefined):void{
    this.wishesService.delete(id).subscribe();
  }

  cambiarDatos() {
    if(this.editarPerfil) {
      this.recargarUserData();
    } 
    this.editarPerfil = this.editarPerfil?false:true;
  }

  subirDatos() {
    this.user.username = this.modifyUser.username;
    this.user.email = this.modifyUser.email;
    this.user.birth_date = this.modifyUser.birth;
    this.user.real_name = this.modifyUser.trueName;
    this.user.surname = this.modifyUser.surname;
    this.user.gender = this.modifyUser.gender;
    this.usersService.update(this.user.id, this.user).subscribe();
    this.cambiarDatos();
    this.usersService.getById(this.user.id).subscribe(
      res=> {

        this.token.saveUser(res);

      }
    );
    
  }

  recargarUserData() {
    this.modifyUser.username = this.user.username;
    this.modifyUser.email = this.user.email;
    this.modifyUser.birth = this.user.birth_date;
    this.modifyUser.trueName = this.user.real_name;
    this.modifyUser.surname = this.user.surname;
    this.modifyUser.gender = this.user.gender;
  }

}
