import { Component } from '@angular/core';
import { finalize, timeout } from 'rxjs';
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
  rol:string = "";
  nuevosDatosUsuario:any = {
    id_role:{
      id: null
    }
  };
  mensaje: string = '';
  usuarioId: number = 0;

  constructor(private users: UsersService){
    
  }

  ngOnInit(): void{
    this.recibirUsers();
  }

  
  borrarUsuario(usuario_id:number){

    this.mensaje = "¿Estás seguro?";
    this.usuarioId = usuario_id;

  }

  borrarUsuarioDefinitivo() {

    this.mensaje = "Se ha borrado el usuario";
    this.users.delete(this.usuarioId).pipe(finalize( () => this.recibirUsers())).subscribe();

  }

  desplegarRol(usuario:any){
    if(usuario.id_role.id == 3){

      this.mensaje = "Se a cambiado el rol de "+usuario.username+" a Colaborador";
      usuario.id_role.id = 2;
      this.users.update(usuario.id,usuario).pipe(finalize( () => this.recibirUsers())).subscribe();

    }else if(usuario.id_role.id == 2){

      this.mensaje = "Se a cambiado cambiar el rol de "+usuario.username+" a User";
      usuario.id_role.id = 3;
      this.users.update(usuario.id,usuario).pipe(finalize( () => this.recibirUsers())).subscribe();
      
    }else if(usuario.id_role.id == 1){

      this.mensaje = "No puedes cambiar el rol de un administrador.";

    }
    
  }

  recibirUsers(){
    this.users.getAll().subscribe
    (res => this.usuarios = res);
  }
}
