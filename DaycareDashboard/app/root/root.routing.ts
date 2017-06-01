import { Routes } from "@angular/router";

export let routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];