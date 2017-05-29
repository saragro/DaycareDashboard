import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BabyLog, BabyLogService, Baby } from '../index';

@Component({
    selector: 'filter-baby-log',
    templateUrl: './app/logs/components/filter-baby-log.component.html',
    styleUrls: ['./app/logs/components/filter-baby-log.component.css'],
})
export class FilterBabyLogComponent implements OnInit, OnChanges{
    babyLog: BabyLog;
    babies: Baby[];

    constructor(private logService: BabyLogService) {

    }

    ngOnChanges(simpleChanges: SimpleChanges) {
        console.log(simpleChanges);
    }

    ngOnInit() {
        this.logService.getActivityLogsForBaby().subscribe(babyLog =>
            this.babyLog = babyLog
        );

        this.logService.getBabyList().subscribe(babies =>  this.babies = babies );
    }

    onBabyChange() {
        this.logService.filterBabyLogByBabyId(this.babyLog.baby.id).subscribe(babyLog =>
            this.babyLog = babyLog
        );
    }
}