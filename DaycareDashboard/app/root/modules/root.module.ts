import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { ActivityModule } from '../../activities/index';
import { BabyLogModule } from '../../logs/index';
import { RootComponent } from '../index';

@NgModule({
    imports: [BrowserModule, HttpModule, ActivityModule, BabyLogModule],
    declarations: [RootComponent],
    bootstrap: [RootComponent],
})
export class RootModule {
}