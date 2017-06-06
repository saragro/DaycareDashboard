import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ParentCredentials, NannyCredentials } from "../index"

@Injectable()
export class LoginService {

    private loginParentUrl = '/api/daycare/LoginParent';
    private headers = new Headers({ 'Content-Type': 'application/json' })

    constructor(private http: Http) {

    }

    loginParent(creds: ParentCredentials): Observable<boolean> {
        var url = `/api/daycare/LoginParent?parentId=${creds.parentId}
                    &babyId=${creds.babyId}&year=${creds.year}`;
        return this.http.post(url, null).map(this.extractData)
            .catch(this.handleError);
    }

    loginNanny(creds: NannyCredentials): Observable<boolean> {
        var url = `/api/daycare/LoginNanny/?userName=${creds.userName}
                    &pwd=${creds.password}`;
        return this.http.post(url, null).map(this.extractData)
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
