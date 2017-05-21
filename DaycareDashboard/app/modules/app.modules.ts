import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BabyLogComponent, AddActivityComponent, ActivityLogService } from "../index";
import { HttpModule } from "@angular/http";



@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [BabyLogComponent, AddActivityComponent],
    bootstrap: [BabyLogComponent],
    providers: [ActivityLogService]
})
export class AppModule {
}