import { Routes } from "@angular/router";
import { EagerComponentComponent } from "./eager-component/eager-component.component";

export const routes: Routes = [  
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'eager', component: EagerComponentComponent },
    { path: '', redirectTo: 'eager', pathMatch: 'full' },
    { path: '**', component: EagerComponentComponent }
];