import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BabyLogComponent, FilterBabyLogComponent, BabyLogService} from "../index";
import { HttpModule } from "@angular/http";
import { CalendarModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/index';

@NgModule({
    imports: [CommonModule, HttpModule, FormsModule, CalendarModule, SharedModule],
    exports: [FilterBabyLogComponent],
    declarations: [BabyLogComponent, FilterBabyLogComponent],
    providers: [BabyLogService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BabyLogModule {
}