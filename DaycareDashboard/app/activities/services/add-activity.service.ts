import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BabyActs, ActivityType, AvailableActivity } from "../index"

@Injectable()
export class AddActivityService {

    private url1 = 'app/assets/activity.json';
    private headers = new Headers({ 'Content-Type': 'application/json' });
	    private logUrl = 'api/daycare/getBabyAndActivities';
    constructor(private http: Http) {

    }

    getBabiesActivities(): Observable<BabyActs[]> {
		

        return this.http.get(this.logUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response): any {
        let res = response.json();
        return res;
    }

    private handleError(error: any) {

        let msg = error.message ? error.message : 'Unknown Error';
        console.error(msg);
        return Observable.throw(msg);

    }

    disabledEnabledActs (isSleep: boolean, isArrive: boolean, avialbleActivities: AvailableActivity[]) {
        for (let act of avialbleActivities) {
            switch (act.actType) {
                case ActivityType.ARRIVE:
                    act.isEnabled = isArrive;
                    break;
                case ActivityType.GO_HOME:
                    act.isEnabled = !isArrive;
                    break;
                case ActivityType.EAT:
                    act.isEnabled = !isArrive && isSleep;
                    break;
                case ActivityType.SLEEP:
                    act.isEnabled = isSleep;
                    break;
                case ActivityType.WAKE_UP:
                    act.isEnabled = !isSleep && !isArrive;
                    break;
                case ActivityType.CHANGED:
                    act.isEnabled = !isArrive && isSleep;
                    break;
            }
        }

    }

    addActivityToBabyLog(baby: BabyActs, actId: number) {
        console.log(baby.name + " - " + baby.id, ActivityType[actId], new Date);
		var url = `api/daycare/saveNewActivity?babyId=${baby.id}&actType=${actId}`;
		this.http.post(url, null).subscribe(x => { });
    }
}