import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';
import { TokenStorageService } from '../_services/token-storage.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-authorcreate',
  templateUrl: './authorcreate.component.html',
  styleUrls: ['./authorcreate.component.css']
})
export class AuthorcreateComponent implements OnInit{

  constructor (
    private token: TokenStorageService, 
    private authorsService: AuthorsService){}

    user:any = null;
    autor:any = {
      name:null,
      surname:null,
      birth_date:null,
      nationality:null,
      descr:null,
      gender:null
    }
    autores:any = [];
    autorElegido:any = null;
    creandoAutor: boolean = false;
    creandoLibro: boolean = false;

  ngOnInit(): void {

    this.user = this.token.getUser();
    this.cargarAutores();
    
  }

  iniciarFormulario(){

    this.creandoAutor = !this.creandoAutor;

  }

  iniciarLibro(){

    this.creandoLibro = !this.creandoLibro;

  }

  enviarDatos(){

    this.creandoAutor = !this.creandoAutor;
    
    this.crearAutor();

  }
  crearAutor(){

    this.authorsService.create(this.autor).pipe(finalize( () => this.cargarAutores())).subscribe();

  }

  cargarAutores(){

    this.authorsService.getAll().subscribe( result => this.autores = result);

  }

}
