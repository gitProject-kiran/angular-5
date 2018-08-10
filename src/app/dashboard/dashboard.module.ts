import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LandingPageComponent]
})
export class DashboardModule { }
