import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {ReposService} from './repos.service';
import {sideNavBarComponent} from './sideNavbar.component'

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.component.html',
    directives: [ROUTER_DIRECTIVES, sideNavBarComponent],
    styleUrls: ['app/navbar.component.css'],
    providers: [ReposService]
})
export class NavBarComponent implements OnInit {
    repos:any[];
    defaultToggle = true;

    constructor(private _reposService:ReposService) {
    }

    ngOnInit() {
        this.repos = this._reposService.getRepos();
    }

    onToggleClick() {
        this.defaultToggle = !this.defaultToggle;
    }

    myToggleNavBarChanges($event) {
        this.defaultToggle = $event.value;
    }

}