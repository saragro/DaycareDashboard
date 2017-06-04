import { Component, OnInit } from '@angular/core';
import { BabyActs } from '../models/baby-acts.model';
import { ButtonModule } from 'primeng/primeng';
import { AddActivityService } from '../index';
import { ActivityType } from "../index";
import { AvailableActivity } from "../models/available-acts.model";


@Component({
    selector: 'add-activity',
    templateUrl: './app/activities/components/add-activity.component.html',
    styleUrls: ['./app/activities/components/add-activity.component.css']
})
export class AddActivityComponent {
    private babyActs: BabyActs[];
   
    constructor(private actService: AddActivityService) {

		//enabled diasbled activities by last baby's act
		
    }

    ngOnInit() {
        this.actService.getBabiesActivities().subscribe(babies => {
            this.babyActs = babies
			for(let baby of this.babyActs) {
				this.enabeldDisabledActivities(baby.lastActivity, baby.avialbleActivities );
			}
        });
		
    }

    addActivity(babyId: string, actId: number) {
        let selected = this.babyActs.find(b => b.id == babyId);
        let selectedAct = selected.avialbleActivities.find(act => act.actType == actId);

        this.actService.addActivityToBabyLog(selected, actId);
        
       this.enabeldDisabledActivities(selectedAct.actType, selected.avialbleActivities);
    }

	enabeldDisabledActivities(actType : ActivityType , avialbleActivities :AvailableActivity[]){
		switch (actType) {
				
				case ActivityType.ARRIVE:
				case ActivityType.EAT:
				case ActivityType.CHANGED:
				case ActivityType.WAKE_UP:
				this.actService.disabledEnabledActs(true, false, avialbleActivities);
					break;
				
				case ActivityType.GO_HOME:
				this.actService.disabledEnabledActs(false, true, avialbleActivities);
					break;
			
				case ActivityType.SLEEP:
				this.actService.disabledEnabledActs(false, false, avialbleActivities);
					break;
			
		}
	}
   
}