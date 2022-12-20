import { Component, Input, OnInit } from '@angular/core';
import { finalize, timeout } from 'rxjs';
import { AuthorsService } from '../services/authors.service';
import { BooksService } from '../services/books.service';
import { EditorialsService } from '../services/editorials.service';
import { WroteService } from '../services/wrote.service';
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
    private editorialsService: EditorialsService,
    private authorsService: AuthorsService,
    private wroteService: WroteService ){}

    @Input() autorElegido:any = null;
    editoriales:any = [];

    
    editorialElegida:any = null;
    user:any = null;
    

    letraDrawer:string = "";

    libroCreado: any = {
      id:null
    };

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

    editorial:any = {
      id: null,
      editorial_name: null
    };

    autor:any={}

    wrote:any = {
      id_author:{
        id:null
      },
      book:{
        id:null
      }
    }


  ngOnInit(): void {
    
    this.user = this.token.getUser();
    this.book.id_user.id=this.user.id;    

    this.editorialsService.getAll().subscribe( result => this.editoriales = result);

    this.recogerAutor();

    console.log(this.autorElegido)

  }

  enviarDatos(){

    this.recogerEditorial();
    this.recogerAutor();
    this.recogerLibro();
    //this.crearLibro();
    //this.crearWrote();

  }

  recogerEditorial(){
    this.editorialsService.getByName(this.editorialElegida).pipe(finalize( () => this.crearLibro()))
    .subscribe(result => this.editorial = result);
  }

  crearLibro(){

    this.book.id_editorial.id = this.editorial.id;
    this.booksService.create(this.book).pipe(finalize( () => this.crearWrote())).subscribe(result => this.libroCreado = result)

  }


  crearWrote(){


    this.wrote.id_author.id = this.autor.id;
    this.wrote.book.id = this.libroCreado.id;
    this.wroteService.create(this.wrote).subscribe(res => console.log("Wrote añadido: "+res,
    window.alert("Libro "+this.book.title+ " creado correctamente.")))
    
  }



  recogerAutor(){
    this.authorsService.getBySurname(this.autorElegido).subscribe(result => this.autor = result);
  }

  recogerLibro(){

    this.letraDrawer = this.book.title.substring(0,1);
    if(this.letraDrawer.search(/[a-zA-Z]/) == -1){
      this.book.id_drawer.id="Otro"
    }else{
      this.book.id_drawer.id=this.letraDrawer.toUpperCase();
    }
  }

}
