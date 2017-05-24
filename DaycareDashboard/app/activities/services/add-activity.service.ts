import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BabyActs } from "../index"

@Injectable()
export class AddActivityService {

    private url = 'app/assets/activity.json';
    private headers = new Headers({ 'Content-Type': 'application/json' })

    constructor(private http: Http) {

    }

    getBabiesActivities(): Observable<BabyActs[]> {
        return this.http.get(this.url)
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
