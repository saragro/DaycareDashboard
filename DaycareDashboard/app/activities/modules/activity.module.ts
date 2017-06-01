import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddActivityComponent, AddActivityService } from "../index";
import { HttpModule } from "@angular/http";
import { SharedModule } from '../../shared/index';


@NgModule({
    imports: [CommonModule, HttpModule, SharedModule],
    declarations: [AddActivityComponent],
    exports: [AddActivityComponent],
    providers: [AddActivityService]
})
export class ActivityModule {
}