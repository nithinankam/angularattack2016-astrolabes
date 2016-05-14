import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';

import {NavBarComponent} from './navbar.component';
import {MyLanguageComponent} from './my-language.component';


@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        `,
    directives: [NavBarComponent, ROUTER_DIRECTIVES],
})
@RouteConfig([
    {
        path: '/',
        name: 'MyLanguage',
        component: MyLanguageComponent,
        useAsDefault: true
    },
    //{
    //    path: '/:language',
    //    name: 'MyLanguage',
    //    component: MyLanguageComponent,
    //    useAsDefault: true
    //}
])

export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}
