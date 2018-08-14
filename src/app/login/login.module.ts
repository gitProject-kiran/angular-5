import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { routes } from './login.routing';
import { ComponentCommunicationService } from './_services/component-communication.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers:[
    ComponentCommunicationService
  ],
  declarations: [
    LoginPageComponent,
    SignupPageComponent,
    ForgotPasswordPageComponent
  ]
})
export class LoginModule { }
