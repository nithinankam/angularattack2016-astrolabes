import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {NavBarComponent} from './navbar.component';
import {MyLanguageComponent} from './my-language.component';
import {LanguageComponent} from './language.component'

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        `,
    directives: [NavBarComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/',
        name: 'MyLanguage',
        component: MyLanguageComponent,
        useAsDefault: true
    },
    {
        path: '/:repoName',
        name: 'Language',
        component: LanguageComponent
    }
])

export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}
