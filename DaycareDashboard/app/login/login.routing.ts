import { Routes } from "@angular/router";
import { LoginParentComponent } from "./index";

export let routes: Routes = [
    { path: 'login', component: LoginParentComponent, pathMatch: 'full' },
];