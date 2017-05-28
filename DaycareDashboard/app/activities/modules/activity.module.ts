import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddActivityComponent, AddActivityService, ActivityPipe } from "../index";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [CommonModule, HttpModule],
    declarations: [AddActivityComponent, ActivityPipe],
    exports: [AddActivityComponent],
    providers: [AddActivityService]
})
export class ActivityModule {
}