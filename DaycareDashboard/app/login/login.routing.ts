import { Routes } from "@angular/router";
import { LoginParentComponent, LoginNannyComponent, LoginMainComponent } from "./index";

export let routes: Routes = [
    { path: 'login', component: LoginMainComponent, pathMatch: 'full' },
];