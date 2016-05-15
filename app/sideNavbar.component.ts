import {Component, Input, Output, EventEmitter } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'side-navbar',
    templateUrl: 'app/sideNavbar.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: []
})
export class sideNavBarComponent {
    @Input()navBarToggle;
    @Input()repos:any;
    @Output() toggleNavBar = new EventEmitter();

    constructor() {
    }

    toggleNavBarOnClick() {
        this.navBarToggle = !this.navBarToggle;
        this.toggleNavBar.emit({
            value: this.navBarToggle
        })
    }
}