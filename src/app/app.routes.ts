import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register/register.component';

const appRoutes: Routes = [   
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },    
    { path: "**", component: NopagefoundComponent }
]

export const APP_ROUTER = RouterModule.forRoot(appRoutes, { useHash: true });