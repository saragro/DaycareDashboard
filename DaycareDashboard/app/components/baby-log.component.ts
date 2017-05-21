import { Component, OnInit } from '@angular/core';
import { BabyLog, ActivityType, ActivityLogService } from '../index';


@Component({
    selector: 'baby-log',
    templateUrl: './app/components/baby-log.component.html',
    styleUrls: ['./app/components/baby-log.component.css'],
})
export class BabyLogComponent implements OnInit {
    private babyLog: BabyLog[];

    constructor(private logService: ActivityLogService) {

    }

    ngOnInit() {
        this.logService.getActivityLogsForBaby().subscribe(acts => {
            this.babyLog = acts
        });
   
    }


}