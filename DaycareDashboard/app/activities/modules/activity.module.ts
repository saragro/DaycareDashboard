import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddActivityComponent, AddActivityService, routes } from "../index";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { IfsModule } from '../../ifs/index';
import { SharedModule } from '../../shared/index';


@NgModule({
    imports: [CommonModule, HttpModule, SharedModule, IfsModule,RouterModule.forChild(routes)],
    declarations: [AddActivityComponent],
    exports: [AddActivityComponent],
    providers: [AddActivityService],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ActivityModule {
}