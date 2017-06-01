import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { ActivityModule } from '../../activities/index';
import { BabyLogModule } from '../../logs/index';
import { LoginModule } from '../../login/index';
import { RootComponent, routes } from '../index';
import { RouterModule } from "@angular/router";


@NgModule({
    imports: [BrowserModule, HttpModule, ActivityModule, BabyLogModule, RouterModule.forRoot(routes, { useHash: true }), LoginModule],
    declarations: [RootComponent],
    bootstrap: [RootComponent],
})
export class RootModule {
}