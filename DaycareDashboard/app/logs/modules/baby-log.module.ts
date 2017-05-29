import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BabyLogComponent, FilterBabyLogComponent, BabyLogService } from "../index";
import { HttpModule } from "@angular/http";
import { CalendarModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, HttpModule, FormsModule, CalendarModule],
    exports: [FilterBabyLogComponent],
    declarations: [BabyLogComponent, FilterBabyLogComponent],
    providers: [BabyLogService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BabyLogModule {
}