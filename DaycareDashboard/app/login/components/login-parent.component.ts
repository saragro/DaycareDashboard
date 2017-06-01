import { Component, OnInit, Input } from '@angular/core';
import { ParentCredentials, LoginService } from '../index';

@Component({
    selector: 'login-parent',
    templateUrl: './app/login/components/login-parent.component.html',
    styleUrls: ['./app/login/components/login-parent.component.css'],
})
export class LoginParentComponent implements OnInit{

    creds: ParentCredentials;

    constructor(private loginService: LoginService) {

    }

    ngOnInit() {
        this.creds = new ParentCredentials();
    }

    doLogin() {
        this.loginService.loginParent(this.creds).subscribe(
            x => console.log(x)
        );
    }
}