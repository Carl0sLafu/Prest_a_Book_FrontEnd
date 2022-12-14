import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { AppRoutingModule } from './app-routing.module';
import { InterfaceComponent } from './interface/interface.component';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { AboutComponent } from './about/about.component';
import { ElementsModule } from './elements/elements.module';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AdminpanelBooksComponent } from './adminpanel-books/adminpanel-books.component';
import { AdminpanelUsersComponent } from './adminpanel-users/adminpanel-users.component';
import { AdminpanelLoansComponent } from './adminpanel-loans/adminpanel-loans.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BooksearchComponent,
    InterfaceComponent,
    LoginregisterComponent,
    AboutComponent,
    AdminpanelComponent,
    AdminpanelBooksComponent,
    AdminpanelUsersComponent,
    AdminpanelLoansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ElementsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
