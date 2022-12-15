import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})
export class LoginregisterComponent implements OnInit {

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

  constructor (private authService: AuthService, private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    
    if (this.tokenStorage.getToken()) {

      window.location.assign("..");

    }

  }

  onSubmitLogin(): void {

    const {username, password} = this.loginFormResults;

    this.useremptyLogin = (username == null)?true:false;
    this.passemptyLogin = (password == null)?true:false;

    if (!this.useremptyLogin && !this.passemptyLogin) {

      this.authService.login(username, password).subscribe(
        data => {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);

         this.reloadPage();
        },
        error => {

          this.errorMessageLogin = "El usuario o la contraseña no coinciden, vuelvelo a intentar";

        }
      );

    }

  }

  onSubmitRegister(): void {

    const {username, email, password, confirmedpassword} = this.registerFormResults;

    this.useremptyRegister = (username == null)?true:false;
    this.emailemptyRegister = (email == null)?true:false;
    this.passemptyRegister = (password == null)?true:false;
    this.passConfirmemptyRegister = (confirmedpassword == null)?true:false;

    var coinciden = false;

    if (password == confirmedpassword) {

      coinciden = true;

    } else if (!this.passemptyRegister && !this.passConfirmemptyRegister) {

      this.errorMessageRegister = 'Las contraseñas no coinciden';
      coinciden = false;

    }

    //Controlar con una consulta de que no se repite el nombre
    if (!this.useremptyRegister && !this.emailemptyRegister && !this.passemptyRegister && !this.passConfirmemptyRegister && coinciden) {

      this.authService.register(username, password, email, username, null, null, null, 3).subscribe(
        data => {

          this.registerSuccesful = true;

        },
        error => {

          this.errorMessageRegister = "Algo a fallado, vuelvelo a intentar";

        }
      );

    }

  }

  cambiarEstado() {

    this.register = this.register?false:true;

    this.useremptyLogin = false;
    this.passemptyLogin = false;

  }

  reloadPage(): void {

    window.location.reload();

  }

}
