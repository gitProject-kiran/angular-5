import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';

export const routes: Routes = [
    { path: 'signin', component: LoginPageComponent },
    { path: 'signup-page', component: SignupPageComponent },
    { path: 'forgot-page', component: ForgotPasswordPageComponent },
    { path: '**', component: LoginPageComponent },
    { path: '', redirectTo: 'signin', pathMatch: 'full' }
];
