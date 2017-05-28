import { Component, OnInit } from '@angular/core';
import { BabyActs } from '../models/baby-acts.model';
import { ButtonModule } from 'primeng/primeng';
import { AddActivityService } from '../index';
import { ActivityType } from "../index";


@Component({
    selector: 'add-activity',
    templateUrl: './app/activities/components/add-activity.component.html',
    styleUrls: ['./app/activities/components/add-activity.component.css']
})
export class AddActivityComponent {
    private babyActs: BabyActs[];
   
    constructor(private actService: AddActivityService) {

    }

    ngOnInit() {
        this.actService.getBabiesActivities().subscribe(babies => {
            this.babyActs = babies
        });

    }

    addActivity(babyId: string, actId: number) {
        let selected = this.babyActs.find(b => b.babyId == babyId);
        let selectedAct = selected.avialbleActivities.find(act => act.actType == actId);

        this.actService.addActivityToBabyLog(selected, actId);
        
        switch (selectedAct.actType) {
            case ActivityType.ARRIVE:
            this.actService.disabledEnabledActs(true, false, selected.avialbleActivities);
                break;
            case ActivityType.GO_HOME:
            this.actService.disabledEnabledActs(false, true, selected.avialbleActivities);
                break;
            case ActivityType.EAT:
            this.actService.disabledEnabledActs(true, false, selected.avialbleActivities);
                break;
            case ActivityType.SLEEP:
            this.actService.disabledEnabledActs(false, false, selected.avialbleActivities);
                break;
            case ActivityType.WAKE_UP:
            this.actService.disabledEnabledActs(true, false, selected.avialbleActivities);
                break;
            case ActivityType.CHANGED:
            this.actService.disabledEnabledActs(true, false, selected.avialbleActivities);
                break;

        }
    }
   
}