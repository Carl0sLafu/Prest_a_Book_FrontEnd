import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { MainComponent } from './main/main.component';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { InterfaceComponent } from './interface/interface.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: '',
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
    }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
