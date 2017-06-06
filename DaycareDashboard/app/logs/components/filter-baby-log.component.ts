import { Component, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { BabyLog, BabyLogService, Baby } from '../index';
import { ActivatedRoute, Params ,Router} from "@angular/router";
import { NgModel } from "@angular/forms";

@Component({
    selector: 'filter-baby-log',
    templateUrl: './app/logs/components/filter-baby-log.component.html',
    styleUrls: ['./app/logs/components/filter-baby-log.component.css'],
})
export class FilterBabyLogComponent implements OnInit{
    babyLog: BabyLog = new BabyLog();
    babies: Baby[] = [];
	  
	@ViewChild("myVar")
    private selectViewModel: NgModel;

    constructor(private logService: BabyLogService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        let babyIdParam = this.route.snapshot.params["babyId"];
        if (babyIdParam) { //parent
            this.initBabyLog(babyIdParam);
        } 

        this.logService.getBabyList().subscribe(babies => { 
            babies.forEach(baby =>
                this.babies.push(new Baby(baby.id, baby.name)));
        });  

		 
		
		   this.selectViewModel.valueChanges.subscribe(x => {
		   if(this.babyLog.baby){
				this.filterByBabyId(this.babyLog.baby.id);
				this.router.navigate(['log', { babyId: this.babyLog.baby.id }]);
			}
        });

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
                this.babyLog.baby = new Baby(baby.id, baby.name);
                this.babyLog.date = new Date();
                this.babyLog.actsLog = baby.actsLog;
                console.log(this.babyLog);
            });
    }

	filterBabyLogByDate () {
	  this.logService.filterBabyLogByDate(this.babyLog.baby.id,this.babyLog.date)
            .subscribe(baby => {
                this.babyLog.actsLog = baby.actsLog;
                console.log(this.babyLog);
            });
	}


}