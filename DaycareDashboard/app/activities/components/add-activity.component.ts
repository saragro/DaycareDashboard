import { Component, OnInit } from '@angular/core';
import { BabyActs } from '../models/baby-acts.model';
import { ButtonModule } from 'primeng/primeng';
import { AddActivityService } from '../index';
import { ActivityType } from "../index";


@Component({
    selector: 'add-activity',
    templateUrl: './app/activities/components/add-activity.component.html',
})
export class AddActivityComponent {
    private babyActs: BabyActs[]

    constructor(private logService: AddActivityService) {

    }

    ngOnInit() {
        this.logService.getBabiesActivities().subscribe(babies => {
            this.babyActs = babies
        });

    }
    eat(id: string) {
        console.log(id);
    }

    goHome(id: string) {
        var selected = this.babyActs.find(b => b.babyId == id);
        for (let act of selected.avialbleActivities) {
            switch (act.actType) {
                case ActivityType.ARRIVE:
                    act.isEnabled = true;
                    console.log(act.actType, "=", act.isEnabled);
                    break;
                default:
                    act.isEnabled = false;
                    break;
            }


        }

    }

    //enableDisableButtons() {
    //    for (let act of selected.avialbleActivities) {
    //        switch (act.actType) {
    //            case ActivityType.ARRIVE:
    //                act.isEnabled = true;
    //                console.log(act.actType, "=", act.isEnabled);
    //                break;
    //            default:
    //                act.isEnabled = false;
    //                break;
    //        }
    //    }




}