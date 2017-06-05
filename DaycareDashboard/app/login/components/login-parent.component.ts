import { Component, OnInit, Input } from '@angular/core';
import { ParentCredentials, LoginService } from '../index';
import { Router } from "@angular/router";


@Component({
    selector: 'login-parent',
    templateUrl: './app/login/components/login-parent.component.html',
    styleUrls: ['./app/login/components/login-parent.component.css'],
})
export class LoginParentComponent implements OnInit{

    creds: ParentCredentials;

    constructor(private loginService: LoginService, private router: Router) {

    }

    ngOnInit() {
        this.creds = new ParentCredentials();
    }

    doLogin() {
        this.loginService.loginParent(this.creds).subscribe(
            (isAuthorized) => {
                if (isAuthorized) {
                    sessionStorage.setItem('userRole', 'parent');
                    this.router.navigate(['log', this.creds.babyId]);
                } else {
                    //TODO show error message
                }
            }
        );
    }
}