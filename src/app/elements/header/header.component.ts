import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users.model';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoged: boolean = false;
  user?:Users;
  rol: number | undefined = 0;
  imInLoginRegister = (window.location.pathname.match("/login-register"))?true:false;

  constructor (private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {

      this.isLoged = true;
      this.user = this.tokenStorage.getUser();

    } else {

      this.isLoged = false;

    }

    if (this.isLoged && this.user != null) {

      this.rol = this.user.id_role?.id;

    }

  }

  logOut(): void {

    this.tokenStorage.signOut();
    window.location.reload();

  }

}
