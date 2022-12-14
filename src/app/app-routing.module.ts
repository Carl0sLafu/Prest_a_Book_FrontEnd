import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { MainComponent } from './main/main.component';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { InterfaceComponent } from './interface/interface.component';
import { AboutComponent } from './about/about.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AdminpanelUsersComponent } from './adminpanel-users/adminpanel-users.component';
import { AdminpanelLoansComponent } from './adminpanel-loans/adminpanel-loans.component';
import { AdminpanelBooksComponent } from './adminpanel-books/adminpanel-books.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'search',
        component: BooksearchComponent
    },
    {
        path: 'login-register',
        component: LoginregisterComponent
    },
    {
        path: 'interface',
        component: InterfaceComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'adminpanel',
        component: AdminpanelComponent
    },
    {
        path: 'adminpanel/users',
        component: AdminpanelUsersComponent
    },
    {
        path: 'adminpanel/loans',
        component: AdminpanelLoansComponent
    },
    {
        path: 'adminpanel/books',
        component: AdminpanelBooksComponent
    }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
