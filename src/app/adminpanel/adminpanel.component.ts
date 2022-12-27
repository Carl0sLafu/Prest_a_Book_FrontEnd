import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  user: any = null;
  isAdmin: boolean = false;
  isColavorator: boolean = false;

  constructor(private token: TokenStorageService) {}

  ngOnInit(): void {

    this.user = this.token.getUser();
    
    if (!this.token.getToken() || this.user?.id_role.id == 3) {

      window.location.assign("..");

    }  

    if (this.user?.id_role.id == 1) {

      this.isAdmin = true;

    } else if (this.user?.id_role.id == 2) {

      this.isColavorator = true;

    }

  }

}
