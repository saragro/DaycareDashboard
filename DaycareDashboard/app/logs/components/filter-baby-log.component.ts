import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BabyLog, BabyLogService, Baby } from '../index';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";


@Component({
    selector: 'filter-baby-log',
    templateUrl: './app/logs/components/filter-baby-log.component.html',
    styleUrls: ['./app/logs/components/filter-baby-log.component.css'],
})
export class FilterBabyLogComponent implements OnInit, OnChanges{
    babyLog: BabyLog;
    babies: Baby[];
	sub: Subscription;
    constructor(private logService: BabyLogService,  private route: ActivatedRoute, private router: Router) {

    }

    ngOnChanges(simpleChanges: SimpleChanges) {
        console.log(simpleChanges);
    }

    ngOnInit() {

	  this.sub = this.route.params
            .switchMap((x: Params) => this.logService.getActivityLogsForBaby(x["id"]))
            .subscribe(babyLog => {
                this.babyLog = babyLog
            });

    
		console.log(this.babyLog);
        this.logService.getBabyList().subscribe(babies =>  this.babies = babies );
    }

    onBabyChange() {
        this.logService.filterBabyLogByBabyId(this.babyLog.baby.id).subscribe(babyLog =>
            this.babyLog = babyLog
        );
    }
}