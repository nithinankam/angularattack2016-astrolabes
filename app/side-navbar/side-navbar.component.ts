import {Component, Input, Output, EventEmitter } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'side-navbar',
    templateUrl: 'app/side-navbar/side-navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class sideNavBarComponent {
    @Input()navBarToggle;
    @Input()repos:any;
    @Output() toggleNavBar = new EventEmitter();

    oggleNavBarOnClick() {
        this.navBarToggle = !this.navBarToggle;
        this.toggleNavBar.emit({
            value: this.navBarToggle
        })
    }
}