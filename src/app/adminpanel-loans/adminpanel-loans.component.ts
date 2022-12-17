import { Component, OnInit } from '@angular/core';
import { LoansService } from '../services/loans.service';

@Component({
  selector: 'app-adminpanel-loans',
  templateUrl: './adminpanel-loans.component.html',
  styleUrls: ['./adminpanel-loans.component.css']
})
export class AdminpanelLoansComponent implements OnInit {

  prestamos:any = null;
  estasSeguro: any = false;

  constructor(private loans: LoansService){}

  ngOnInit(): void{
    this.loans.getAll().subscribe
    (res => this.prestamos = res);
  }

  comprobar(): void{
    console.log("PRESTAMOS"+JSON.stringify(this.prestamos));
  }

  borrarPrestamo(prestamo_id:number){
    this.estasSeguro = window.confirm("¿Estás seguro?");
    console.log(prestamo_id)
    if(this.estasSeguro){
          this.loans.delete(prestamo_id).subscribe();
          window.alert("Libro borrado correctamente");
    }
  }

}
