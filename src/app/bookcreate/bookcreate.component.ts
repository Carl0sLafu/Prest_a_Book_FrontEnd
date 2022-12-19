import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { BooksService } from '../services/books.service';
import { EditorialsService } from '../services/editorials.service';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-bookcreate',
  templateUrl: './bookcreate.component.html',
  styleUrls: ['./bookcreate.component.css']
})


export class BookcreateComponent implements OnInit{
  
  constructor (
    private token: TokenStorageService, 
    private booksService: BooksService,
    private auth: AuthService, 
    private editorialsService: EditorialsService ){}

    editoriales:any = [];
    editorial:any = {
      id: null,
      editorial_name: null
    };
    
    editorialElegida:any = null;
    user:any = null;
    letraDrawer:string = "";
    book:any = {
      isbn: null,
      title: null,
      num_pages: null,
      genre: "Genero temporal",
      description: null,
      img: "assets/Bookimage_placeholder.png",
      id_editorial:{
        id:null
      },
      id_drawer:{
        id:null
      },
      id_user:{
        id:null
      }
    };


  ngOnInit(): void {
    
    this.user = this.token.getUser();

    this.editorialsService.getAll().subscribe( result => this.editoriales = result);

  }

  enviarDatos(){


    this.editorialsService.getByName(this.editorialElegida).subscribe( result => this.editorial = result);
    this.book.id_editorial.id = this.editorial.id;
    this.book.id_user.id=this.user.id;

    this.letraDrawer = this.book.title.substring(0,1);
    if(this.letraDrawer.search(/[a-zA-Z]/) == -1){
      this.book.id_drawer.id="Otro"
    }else{
      this.book.id_drawer.id=this.letraDrawer.toUpperCase();
    }

    //this.sendRequests();
    this.crearLibro();
    
  }

  crearLibro(){
    this.booksService.create(this.book).subscribe();
    console.log(this.book)
  }

  sendRequests(){

    this.booksService.getByTitle(this.book.title).pipe(finalize( () => this.enviarDatos())).subscribe( result => this.book = result);
    console.log(this.book)
  }
}
