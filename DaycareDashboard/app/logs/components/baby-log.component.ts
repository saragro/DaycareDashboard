import { Component, OnInit, Input } from '@angular/core';
import { Activity, ActivityType, BabyLogService } from '../index';


@Component({
    selector: 'baby-log',   
    templateUrl: './app/logs/components/baby-log.component.html',
    styleUrls: ['./app/logs/components/baby-log.component.css'],
})
export class BabyLogComponent {
    @Input() activities: Activity[];
	isNanny :boolean;	
    
	constructor(private logService: BabyLogService) {
      
    }

    ngOnInit() {
        console.log(this.activities);
		if(sessionStorage.getItem('userRole')=='nanny') {
			this.isNanny= true;
		}
		else {
			this.isNanny = false;
		}
    }

	updateActivity(act:Activity) {
		this.logService.updateActivity(act);
	}
 


}