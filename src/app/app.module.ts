import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { EagerComponentComponent } from './eager-component/eager-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EagerComponentComponent
  ],
  imports: [
    BrowserModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgHttpLoaderModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
