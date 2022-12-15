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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { AuthInterceptor } from './_helpers/auth.interceptor';

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
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ElementsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
