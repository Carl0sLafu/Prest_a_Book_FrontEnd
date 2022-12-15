import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoged: boolean = false;

  constructor (private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    
    if (this.tokenStorage.getToken()) {

      this.isLoged = true;

    } else {

      this.isLoged = false;

    }

  }

  logOut(): void {

    this.tokenStorage.signOut();
    window.location.reload();

  }

}
