import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './http-interceptor/my-http-interceptor';
import { SharedDataModuleService } from './shared-data-module/shared-data-module.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
  },
    SharedDataModuleService],
  declarations: []
})
export class SharedModule { }
