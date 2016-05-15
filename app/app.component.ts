import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {NavBarComponent} from './navbar/navbar.component';
import {AllLanguagesComponent} from './all-languages/all-languages.component';
import {LanguageComponent} from './language/language.component'

@Component({
    selector: 'my-app',
    template: `<navbar></navbar>`,
    directives: [NavBarComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/',
        name: 'AllLanguages',
        component: AllLanguagesComponent,
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
        redirectTo: ['AllLanguages']
    }
])

export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}
