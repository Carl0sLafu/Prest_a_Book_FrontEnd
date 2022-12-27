import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { LoansService } from '../services/loans.service';

@Component({
  selector: 'app-adminpanel-loans',
  templateUrl: './adminpanel-loans.component.html',
  styleUrls: ['./adminpanel-loans.component.css']
})
export class AdminpanelLoansComponent implements OnInit {

  prestamos:any = null;
  estasSeguro: any = false;
  mensaje: string = '';
  idprestamo: number = 0;

  constructor(private loans: LoansService){}

  ngOnInit(): void{
    this.recibirPrestamos();
  }

  borrarPrestamo(prestamo_id:number){

    this.mensaje = "¿Estás seguro?";
    this.idprestamo = prestamo_id;

  }

  borradoDefinitivo() {

    this.mensaje = "Préstamo borrado correctamente";
    this.loans.delete(this.idprestamo).pipe(finalize(() => this.recibirPrestamos())).subscribe();

  }

  recibirPrestamos(){
    this.loans.getAll().subscribe
    (res => this.prestamos = res);
  }
}
