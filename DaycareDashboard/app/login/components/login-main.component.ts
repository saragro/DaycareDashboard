import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { NannyCredentials, LoginService } from '../index';
import { Router } from "@angular/router";


@Component({
    selector: 'login-main',
    templateUrl: './app/login/components/login-main.component.html',
    styleUrls: ['./app/login/components/login-main.component.css'],
    //encapsulation: ViewEncapsulation.None,
})
export class LoginMainComponent implements OnInit{

    private selectedRole: string = 'Nanny';
    private roles: { label: string, value: string }[];

    constructor(private loginService: LoginService, private router: Router) {
        this.roles = [];
        this.roles.push({ label: 'Nanny', value: 'Nanny' });
        this.roles.push({ label: 'Parent', value: 'Parent' });
    }

    ngOnInit() {
    }

    switchLogin() {
        console.log('hi');
    }

    
}