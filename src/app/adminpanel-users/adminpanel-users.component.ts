import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-adminpanel-users',
  templateUrl: './adminpanel-users.component.html',
  styleUrls: ['./adminpanel-users.component.css']
})
export class AdminpanelUsersComponent {

  usuarios:any = null

  constructor(private users: UsersService){}

  ngOnInit(): void{
    this.users.getAll().subscribe
    (res => this.usuarios = res);
  }
}
