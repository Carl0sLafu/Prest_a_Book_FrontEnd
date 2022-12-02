import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { MainComponent } from './main/main.component';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { InterfaceComponent } from './interface/interface.component';
const routes: Routes = [
    {
        path: 'search',
        component: BooksearchComponent
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'login-register',
        component: LoginregisterComponent
    },
    {
        path: 'interface',
        component: InterfaceComponent
    }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }