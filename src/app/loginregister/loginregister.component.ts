import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';
import { Users } from '../models/users.model';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})
export class LoginregisterComponent implements OnInit {

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(event.key == "Enter" && this.register == false){
      this.onSubmitLogin();
    }else if (event.key == "Enter" && this.register == true){
      this.onSubmitRegister();
    }
  }

  routeString: string = '';
  register: boolean = false;
  loginFormResults: any = {

    username: null,
    password: null

  };

  registerFormResults: any = {

    username: null,
    email: null,
    password: null,
    confirmedpassword: null

  };

  errorMessageLogin = '';
  errorMessageRegister = '';

  useremptyLogin: boolean = false;
  passemptyLogin: boolean = false;

  useremptyRegister: boolean = false;
  emailemptyRegister: boolean = false;
  passemptyRegister: boolean = false;
  passConfirmemptyRegister: boolean = false;

  registerSuccesful: boolean = false;

  usuarioExiste?:Users;

  constructor (private authService: AuthService, private tokenStorage: TokenStorageService, private users: UsersService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    
    if (this.tokenStorage.getToken()) {

      window.location.assign("..");

    }

    this.comprobarRuta();

  }

  onSubmitLogin(): void {

    const {username, password} = this.loginFormResults;
    this.useremptyLogin = (username == null)?true:false;
    this.passemptyLogin = (password == null)?true:false;

    if (!this.useremptyLogin && !this.passemptyLogin) {

      this.authService.login(username, password).subscribe(
        data => {

          this.tokenStorage.saveToken(data.token);
          this.users.getByUsername(username).subscribe(
            res => {
              this.tokenStorage.saveUser(res);
              this.reloadPage();
              }
            );

        },
        error => {

          this.errorMessageLogin = "El usuario o la contrase??a no coinciden, vuelvelo a intentar";

        }
      );

    }

  }

  onSubmitRegister(): void {

    const {username, email, password, confirmedpassword} = this.registerFormResults;

    this.users.getByUsername(username).pipe(finalize(() => this.enviarRegister(username, email, password, confirmedpassword))).subscribe( result => this.usuarioExiste = result);

    

  }

  cambiarEstado() {

    this.register = this.register?false:true;

    this.useremptyLogin = false;
    this.passemptyLogin = false;

  }

  comprobarRuta() {

    this.route.queryParams.subscribe(
      params => {

        this.routeString = params['register'];

        }      
      
      );

    if (this.routeString.match("true")) {

      this.register = true;

    }

  }

  reloadPage(): void {

    window.location.reload();

  }

  enviarRegister(username:any, email:any, password:any, confirmedpassword:any){
    this.useremptyRegister = (username == null)?true:false;
    this.emailemptyRegister = (email == null)?true:false;
    this.passemptyRegister = (password == null)?true:false;
    this.passConfirmemptyRegister = (confirmedpassword == null)?true:false;

    var coinciden = false;

    if (password == confirmedpassword) {

      coinciden = true;

    } else if (!this.passemptyRegister && !this.passConfirmemptyRegister) {

      this.errorMessageRegister = 'Las contrase??as no coinciden';
      coinciden = false;

    }

    //Controlar con una consulta de que no se repite el nombre
    if ( (!this.useremptyRegister && !this.emailemptyRegister && !this.passemptyRegister && !this.passConfirmemptyRegister && coinciden) && !this.usuarioExiste) {

      this.authService.register(username, password, email, username, null, null, null, 3).subscribe(
        data => {

          this.registerSuccesful = true;

        },
        error => {

          this.errorMessageRegister = "Algo ha fallado, vuelvelo a intentar";

        }
      );

    }else if(this.usuarioExiste){
      this.errorMessageRegister = "Este usuario ya existe";
    }
  }

}
