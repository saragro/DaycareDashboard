import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/toPromise";

import { BabyLog, Baby } from "../index"

@Injectable()
export class BabyLogService {

    private logUrl = 'api/daycare/getBabyActivitiesLog';
    private babyListUrl = 'api/daycare/getBabies';
    private headers = new Headers({ 'Content-Type': 'application/json' })

    constructor(private http: Http) {

    }

    getActivityLogsForBaby(babyId:string): Observable<BabyLog> {
		let url = `api/daycare/getBabyById?id=${babyId}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getBabyList(): Observable<Baby[]> {
        return this.http.get(this.babyListUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    filterBabyLogByBabyId(babyId: string): Observable<any> {
        console.log('filter by '+babyId);

		var url = `api/daycare/getBabyActivitiesLogById?id=${babyId}`;
		return this.http.get(url).map(this.extractData).catch(this.handleError);
            
    }

    private extractData(response: Response): any {
        let res = response.json();
        console.log('res=' + res);

        return res;
    }

    private handleError(error: any) {
        let msg = error.message ? error.message : 'Unknown Error';
        console.error(msg);
        return Observable.throw(msg);
    }

}
