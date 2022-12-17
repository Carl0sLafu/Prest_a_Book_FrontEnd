import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  constructor (private token: TokenStorageService, private auth: AuthService, private usersService: UsersService) {}

  editarPerfil: boolean = false;
  user: any = null;
  modificacionExitosa: boolean = false;
  error: string = '';

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
    console.log(this.user);

  }

  cambiarDatos() {

    if(this.editarPerfil) {

      this.recargarUserData();

    } 

    this.editarPerfil = this.editarPerfil?false:true;

  }

  subirDatos() {

    this.auth.updateUser(this.user.id, 
      this.modifyUser.username, 
      this.user.psswd, 
      this.modifyUser.email, 
      this.modifyUser.trueName,
      this.modifyUser.surname, 
      this.modifyUser.birth, 
      this.modifyUser.gender, 
      this.user.id_role.id).subscribe(
      result => {

        console.log(result);
        this.modificacionExitosa = true;

        this.usersService.getById(this.user.id).subscribe(
          res => {
            this.token.saveUser(res);
            }
        );

        this.error = '';

      },
      err => {

        console.log(err);
        this.error = 'Algo a fallado';

      }

    );

    this.cambiarDatos();

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
