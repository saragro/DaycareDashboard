import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddActivityComponent } from "../index";
import { HttpModule } from "@angular/http";
import { CalendarModule } from 'primeng/primeng';



@NgModule({
    imports: [CommonModule, HttpModule, CalendarModule],
    declarations: [AddActivityComponent],
})
export class ActivityModule {
}