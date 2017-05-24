import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BabyLogComponent, BabyLogService } from "../index";
import { HttpModule } from "@angular/http";
import { CalendarModule } from 'primeng/primeng';



@NgModule({
    imports: [CommonModule, HttpModule, CalendarModule],
    exports: [BabyLogComponent],
    declarations: [BabyLogComponent],
    providers: [BabyLogService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BabyLogModule {
}