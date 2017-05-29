import { Component, OnInit, Input } from '@angular/core';
import { Activity, ActivityType, BabyLogService } from '../index';


@Component({
    selector: 'baby-log',   
    templateUrl: './app/logs/components/baby-log.component.html',
    styleUrls: ['./app/logs/components/baby-log.component.css'],
})
export class BabyLogComponent {
    @Input() activities: Activity[];
    
    constructor(private logService: BabyLogService) {
      
    }

    ngOnInit() {
        console.log(this.activities);
    }
 


}