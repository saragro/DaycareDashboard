import { Component, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { BabyLog, BabyLogService, Baby } from '../index';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
    selector: 'filter-baby-log',
    templateUrl: './app/logs/components/filter-baby-log.component.html',
    styleUrls: ['./app/logs/components/filter-baby-log.component.css'],
})
export class FilterBabyLogComponent implements OnInit {
    babyLog: BabyLog = new BabyLog();
    babies: Baby[] = [];

    constructor(private logService: BabyLogService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        //params will change when a different baby is selected
        this.route.params.subscribe(params => {
            this.logService.getBabyList().toPromise().then(babies => {
                babies.forEach(baby =>
                    this.babies.push(new Baby(baby.id.trim(), baby.name.trim())));
            }).then(() => {
                let babyIdParam = this.route.snapshot.params["babyId"];
                if (babyIdParam) {
                    this.initBabyLog(babyIdParam);
                } else {
                    this.initBabyLog('1');
                }
            }
           
                );
        });


    }

    onBabyChange(newBaby: Baby) {
        this.babyLog.baby = newBaby;
        let newBabyId = this.babyLog.baby.id;
        //this.filterByBabyId(newBabyId);
        this.router.navigate(['log', { babyId: newBabyId }]);
    }

    filterByBabyId(babyId: string) {
        this.logService.filterBabyLogByBabyId(babyId)
            .subscribe(baby => {
                this.babyLog.date = new Date();
                this.babyLog.actsLog = baby.actsLog;
                console.log(this.babyLog);
            });
    }

    initBabyLog(babyId: string) {
        this.logService.filterBabyLogByBabyId(babyId)
            .subscribe(baby => {
                this.babyLog = new BabyLog();
                this.babyLog.baby = this.babies.find(b => b.id == babyId);
                this.babyLog.date = new Date();
                this.babyLog.actsLog = baby.actsLog;
                console.log(this.babyLog);
            });
    }

    filterBabyLogByDate() {
        this.logService.filterBabyLogByDate(this.babyLog.baby.id, this.babyLog.date)
            .subscribe(baby => {
                this.babyLog.actsLog = baby.actsLog;
                console.log(this.babyLog);
            });
    }

    isNanny() {
        return sessionStorage.getItem('userRole') == 'nanny';
    }

}