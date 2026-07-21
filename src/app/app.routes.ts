import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { LoginPage } from './components/login-page/login-page';
import { CreateAccountPage } from './components/create-account-page/create-account-page';

export const routes: Routes = [

    {
        path :'',
        component : HomePage,
        title : 'Home Page'
    },
    {
        path :'login',
        component : LoginPage,
        title : 'Login Page'
    },
    {
        path :'create-account',
        component : CreateAccountPage,
        title : 'Create Account Page'
    },
    {
        path :'**',
        redirectTo : ''
    }

];
