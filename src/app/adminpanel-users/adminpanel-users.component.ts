import { Component } from '@angular/core';
import { timeout } from 'rxjs';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel-users',
  templateUrl: './adminpanel-users.component.html',
  styleUrls: ['./adminpanel-users.component.css']
})
export class AdminpanelUsersComponent {

  usuarios:any = null
  estasSeguro: any = false;

  constructor(private users: UsersService){
    
  }

  ngOnInit(): void{
    this.users.getAll().subscribe
    (res => this.usuarios = res);
  }

  
  borrarUsuario(usuario_id:number){
    this.estasSeguro = window.confirm("¿Estás seguro?");
    console.log(usuario_id)
    if(this.estasSeguro){
          this.users.delete(usuario_id).subscribe()
    }

  }
}
