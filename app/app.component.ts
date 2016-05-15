import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {NavBarComponent} from './navbar.component';
import {MyLanguageComponent} from './my-language.component';
import {LanguageComponent} from './language.component'

@Component({
    selector: 'my-app',
    template: `<navbar></navbar>`,
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
        path: '/:languageName',
        name: 'Language',
        component: LanguageComponent
    },
    {
        path: '/*others',
        name: 'Others',
        redirectTo: ['MyLanguage']
    }
])

export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}
