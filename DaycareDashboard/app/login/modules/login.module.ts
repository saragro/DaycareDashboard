import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginParentComponent, LoginNannyComponent, LoginMainComponent, LoginService, routes } from "../index";
import { HttpModule } from "@angular/http";
import { CalendarModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { SelectButtonModule } from 'primeng/primeng';

@NgModule({
    imports: [CommonModule, FormsModule, SelectButtonModule, RouterModule.forChild(routes)],
    declarations: [LoginParentComponent, LoginNannyComponent, LoginMainComponent],
    providers: [LoginService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA ]

})
export class LoginModule {
}