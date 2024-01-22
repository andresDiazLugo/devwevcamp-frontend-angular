import { Routes } from '@angular/router';
import { LoginComponent } from './autenticacion/login/login.component';
import { RegisterAccountComponent } from './autenticacion/register-account/register-account.component';
export const routes: Routes = [
    { path: '', redirectTo:'/login',pathMatch:'full'},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: RegisterAccountComponent },

];
