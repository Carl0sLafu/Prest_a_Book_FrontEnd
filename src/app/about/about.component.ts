import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  fotonum: number = 0;
  imgSrc1 = "/assets/fotoalberto.png"
  imgSrc2 = "/assets/fotofacundo.png"
  imgSrc3 = "/assets/fotoalberto.png"

  agrandar(fotonum:number){
    this.fotonum = fotonum;
  }
}
