import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register/register.component';

const appRoutes: Routes = [
    {
        path: "",
        component: PagesComponent,
        children: [
            { path: "dashboard", component: DashboardComponent },
            { path: "progress", component: ProgressComponent },
            { path: "Graficas1", component: DashboardComponent },
            { path: "", redirectTo: "/dashboard", pathMatch: "full" }
        ]
    },

    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },    
    { path: "**", component: NopagefoundComponent }
]

export const APP_ROUTER = RouterModule.forRoot(appRoutes, { useHash: true });