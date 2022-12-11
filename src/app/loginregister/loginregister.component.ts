import { Component } from '@angular/core';


@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})
export class LoginregisterComponent {

  register: boolean = false;

  constructor () {

  }

  cambiarEstado() {

    this.register = this.register?false:true;

  }

}
