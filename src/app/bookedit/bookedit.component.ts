import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { AuthorsService } from '../services/authors.service';
import { BooksService } from '../services/books.service';
import { EditorialsService } from '../services/editorials.service';
import { WroteService } from '../services/wrote.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html',
  styleUrls: ['./bookedit.component.css']
})
export class BookeditComponent implements OnInit {

  user: any = null;
  libroElegido: any = null;
  autorElegido: any = null;

  letraDrawer: string = "";
  libros:any =[];
  editoriales: any = [];
  autores: any = [];

  autor: any = {
    id:null,
    name: null,
    surname: "",
    birth_date: null,
    nationality: null,
    descr: null,
    gender: null
  };

  escritoPor:any = {
    id:null,
    id_author:{
      id:null,
      name:null,
      surname:null,
      birth_date:null,
      nationality:null,
      descr:null,
      gender:null
    },
    book:{
      id:null
    }
  };

  libro:any = {
    isbn: null,
    title: null,
    num_pages: null,
    genre: "Genero temporal",
    description: null,
    img: "assets/Bookimage_placeholder.png",
    id_editorial:{
      id:null,
      editorial_name:null
    },
    id_drawer:{
      id:null
    },
    id_user:{
      id:null
    }
  };

  editorial:any = {
    id: null,
    editorial_name: null
  };

  constructor(private booksService : BooksService,
    private editorialsService : EditorialsService,
    private wroteService : WroteService,
    private authorService: AuthorsService,
    private token: TokenStorageService){}

  ngOnInit(): void {
    
    this.user = this.token.getUser();
    this.libro.id_user.id=this.user.id;

    this.recogerLibros();
    this.recogerEditoriales();
    this.recogerAutores();

  }

  recogerLibros(){
    this.booksService.getByOwner(this.user.id).subscribe( result => this.libros = result);
  }

  recogerEditoriales(){
    this.editorialsService.getAll().subscribe( result => this.editoriales = result);
  }

  recogerAutores(){
    this.authorService.getAll().subscribe(result => this.autores = result);
  }

  recogerEscritopor(){
    this.wroteService.getByBook(this.libro.id).subscribe( result => this.escritoPor = result);
    
  }



  enviarDatos(){

    this.elegirEditorial();

  }
  
  elegirLibro(){
    this.booksService.getByTitle(this.libroElegido).pipe(finalize( () => this.recogerEscritopor())).subscribe( result => this.libro = result);
    
  }
  

  elegirEditorial(){
    this.editorialsService.getById(this.libro.id_editorial.id).pipe(finalize( () => this.elegirEscritopor())).subscribe(result => this.editorial = result);
  }

  elegirEscritopor(){
    this.wroteService.getByBook(this.libro.id).pipe(finalize( () => this.elegirAutor())).subscribe(result => this.escritoPor = result);
  }

  elegirAutor(){
    this.authorService.getBySurname(this.autorElegido).pipe(finalize( () => this.recogerEditorial())).subscribe(result => this.autor = result);
  }

  recogerEditorial(){
    this.editorialsService.getByName(this.libro.id_editorial.editorial_name).pipe(finalize( () => this.crearLibro()))
    .subscribe(result => this.editorial = result);
  }

  crearLibro(){

    this.letraDrawer = this.libro.title.substring(0,1);
    if(this.letraDrawer.search(/[a-zA-Z]/) == -1){
      this.libro.id_drawer.id="Otro"
    }else{
      this.libro.id_drawer.id=this.letraDrawer.toUpperCase();
    }
    this.libro.id_editorial.id = this.editorial.id;
    this.libro.id_drawer.id = this.letraDrawer;
    this.booksService.update(this.libro.id,this.libro).subscribe();
    window.alert("Libro "+this.libro.title+ " editado correctamente.");
  }


}


