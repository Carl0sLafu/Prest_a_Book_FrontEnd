import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TokenStorageService } from './_services/token-storage.service';
import { UsersService } from './services/users.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'prest-a-book';

  ngOnInit(): void {

  }

}
