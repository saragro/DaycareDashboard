import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BabyLogComponent, AddActivityComponent, ActivityLogService, AddActivityService } from "../index";
import { HttpModule } from "@angular/http";



@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [BabyLogComponent, AddActivityComponent],
    //bootstrap: [BabyLogComponent],
    bootstrap: [AddActivityComponent],
    providers: [ActivityLogService, AddActivityService]
})
export class AppModule {
}