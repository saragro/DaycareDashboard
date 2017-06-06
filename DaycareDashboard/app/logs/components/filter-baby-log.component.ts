import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BabyLog, BabyLogService, Baby } from '../index';
import { ActivatedRoute, Params } from "@angular/router";
import { NgModel } from "@angular/forms";

@Component({
    selector: 'filter-baby-log',
    templateUrl: './app/logs/components/filter-baby-log.component.html',
    styleUrls: ['./app/logs/components/filter-baby-log.component.css'],
})
export class FilterBabyLogComponent implements OnInit{
    babyLog: BabyLog = new BabyLog();
    babies: Baby[] = [];

    constructor(private logService: BabyLogService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        let babyIdParam = this.route.snapshot.params["babyId"];
        if (babyIdParam) { //parent
            this.filterByBabyId(babyIdParam);
        } else { //nanny
            //this.logService.getActivityLogsForBaby(babyIdParam).subscribe(babyLog =>
            //    this.babyLog = babyLog
            //);
        }
        this.logService.getBabyList().subscribe(babies => { 
            babies.forEach(baby =>
                this.babies.push(new Baby(baby.id, baby.name)));
        });         
    }

    filterByBabyId(babyId: string) {
        this.logService.filterBabyLogByBabyId(babyId)
            .subscribe(baby => {
                this.babyLog = new BabyLog();
                this.babyLog.baby = new Baby(baby.id, baby.name);
                this.babyLog.date = new Date();
                this.babyLog.actsLog = baby.actsLog;
                console.log(this.babyLog);
            });
    }


}