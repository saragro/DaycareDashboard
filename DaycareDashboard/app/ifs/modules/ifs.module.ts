import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "../index";
import { HttpModule } from "@angular/http";
import { CalendarModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [CommonModule],
    exports: [],
    declarations: [],
    providers: [AuthGuard]
})
export class IfsModule {
}