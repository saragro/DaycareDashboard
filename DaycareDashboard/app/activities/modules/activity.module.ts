import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddActivityComponent, AddActivityService } from "../index";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [CommonModule, HttpModule],
    declarations: [AddActivityComponent],
    exports: [AddActivityComponent],
    providers: [AddActivityService]
})
export class ActivityModule {
}