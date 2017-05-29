import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BabyLog, Baby } from "../index"

@Injectable()
export class BabyLogService {

    private logUrl = 'app/assets/log.json';
    private babyListUrl = 'app/assets/babyList.json';
    private headers = new Headers({ 'Content-Type': 'application/json' })

    constructor(private http: Http) {

    }

    getActivityLogsForBaby(): Observable<BabyLog> {
        return this.http.get(this.logUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getBabyList(): Observable<Baby[]> {
        return this.http.get(this.babyListUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    filterBabyLogByBabyId(babyId: string): Observable<BabyLog> {
        console.log('filter by '+babyId);
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

}
