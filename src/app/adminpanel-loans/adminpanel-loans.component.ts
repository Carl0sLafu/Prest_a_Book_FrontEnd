import { Component, OnInit } from '@angular/core';
import { LoansService } from '../services/loans.service';

@Component({
  selector: 'app-adminpanel-loans',
  templateUrl: './adminpanel-loans.component.html',
  styleUrls: ['./adminpanel-loans.component.css']
})
export class AdminpanelLoansComponent implements OnInit {

  prestamos:any = null

  constructor(private loans: LoansService){}

  ngOnInit(): void{
    this.loans.getAll().subscribe
    (res => this.prestamos = res);
  }

  comprobar(): void{
    console.log("PRESTAMOS"+JSON.stringify(this.prestamos));
  }

}
