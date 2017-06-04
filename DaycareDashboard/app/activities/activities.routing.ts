import { Routes } from "@angular/router";
import { AddActivityComponent } from "./index";

export let routes: Routes = [
    { path: 'addAct', component: AddActivityComponent, pathMatch: 'full' },
];