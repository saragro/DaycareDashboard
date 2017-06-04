import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BabyLogComponent, FilterBabyLogComponent, BabyLogService, routes } from "../index";
import { HttpModule } from "@angular/http";
import { CalendarModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { IfsModule } from '../../ifs/index';


@NgModule({
    imports: [CommonModule, HttpModule, FormsModule, CalendarModule, IfsModule, RouterModule.forChild(routes)],
    exports: [FilterBabyLogComponent],
    declarations: [BabyLogComponent, FilterBabyLogComponent],
    providers: [BabyLogService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BabyLogModule {
}