import { Component, OnInit } from '@angular/core';
import { BabyLog, ActivityType, BabyLogService } from '../index';


@Component({
    selector: 'baby-log',   
    templateUrl: './app/logs/components/baby-log.component.html',
    styleUrls: ['./app/logs/components/baby-log.component.css'],
})
export class BabyLogComponent implements OnInit {
    private babyLog: BabyLog;

    constructor(private logService: BabyLogService) {
      
    }

    ngOnInit() {
        this.logService.getActivityLogsForBaby().subscribe(babyLog => {
            this.babyLog = babyLog;
            console.log(this.babyLog.actsLog);
        });
   
    }


}