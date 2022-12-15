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

  constructor (private authService: AuthService, private tokenStorage: TokenStorageService) {

  }

  ngOnInit(): void {
    
    if (this.tokenStorage.getToken()) {

      window.location.assign("..");

    }

  }

  onSubmitLogin(): void {

    const {username, password} = this.loginFormResults;
    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.reloadPage();
      },
      error => {

        this.errorMessageLogin = error;

      }
    );

  }

  cambiarEstado() {

    this.register = this.register?false:true;

  }

  reloadPage(): void {

    window.location.reload();

  }

}
