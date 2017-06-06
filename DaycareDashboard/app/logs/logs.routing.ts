import { Routes } from "@angular/router";
import { FilterBabyLogComponent, AuthGuard } from "./index";


export let routes: Routes = [
    { path: 'log', component: FilterBabyLogComponent, pathMatch: 'full', canActivate: [AuthGuard] },

];