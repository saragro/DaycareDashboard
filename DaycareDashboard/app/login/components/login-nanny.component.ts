import { Component, OnInit, Input } from '@angular/core';
import { NannyCredentials, LoginService } from '../index';
import { Router } from "@angular/router";


@Component({
    selector: 'login-nanny',
    templateUrl: './app/login/components/login-nanny.component.html',
    styleUrls: ['./app/login/components/login-nanny.component.css'],
})
export class LoginNannyComponent implements OnInit{

    creds: NannyCredentials;

    constructor(private loginService: LoginService, private router: Router) {

    }

    ngOnInit() {
        this.creds = new NannyCredentials();
    }

    doLogin() {
        this.loginService.loginNanny(this.creds).subscribe(
            (isAuthorized) => {
                if (isAuthorized) {
                    sessionStorage.setItem('userRole', 'nanny');
                    this.router.navigate(['addAct']);
                } else {
                    //TODO show error message
                }
            }
        );
    }
}