import { Routes } from "@angular/router";
import { FilterBabyLogComponent, AuthGuard } from "./index";


export let routes: Routes = [
    { path: 'log/:babyId', component: FilterBabyLogComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'log', component: FilterBabyLogComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'log/:id', component: FilterBabyLogComponent, pathMatch: 'full', canActivate: [AuthGuard] },
];