import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { ActivityPipe } from '../index';

@NgModule({
    imports: [CommonModule],
    declarations: [ActivityPipe],
    exports: [ActivityPipe]
})
export class SharedModule {
}