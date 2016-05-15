import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {ReposService} from './../shared/repos/repos.service';
import {sideNavBarComponent} from './../side-navbar/side-navbar.component'

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.component.html',
    directives: [ROUTER_DIRECTIVES, sideNavBarComponent],
    styleUrls: ['app/navbar/navbar.component.css'],
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