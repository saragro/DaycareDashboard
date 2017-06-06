import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BabyLog, BabyLogService, Baby } from '../index';
import { ActivatedRoute, Params } from "@angular/router";


@Component({
    selector: 'filter-baby-log',
    templateUrl: './app/logs/components/filter-baby-log.component.html',
    styleUrls: ['./app/logs/components/filter-baby-log.component.css'],
})
export class FilterBabyLogComponent implements OnInit, OnChanges{
    babyLog: BabyLog;
    babies: Baby[];

    constructor(private logService: BabyLogService, private route: ActivatedRoute) {

    }

    ngOnChanges(simpleChanges: SimpleChanges) {
        console.log(simpleChanges);
    }

    ngOnInit() {
        let babyIdParam = this.route.snapshot.params["babyId"];
        if (babyIdParam) {
            this.logService.filterBabyLogByBabyId(babyIdParam)
                .subscribe(babyLog => this.babyLog = babyLog);
        } 
		else {
            this.logService.getActivityLogsForBaby().subscribe(babyLog =>
                this.babyLog = babyLog
            );
        }        
		console.log(this.babyLog);
        this.logService.getBabyList().subscribe(babies =>  this.babies = babies );
    }

    onBabyChange() {
        this.logService.filterBabyLogByBabyId(this.babyLog.baby.id).subscribe(babyLog =>
            this.babyLog = babyLog
        );
    }
}