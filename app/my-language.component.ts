import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {githubService} from './github.service';
import {ReposService} from './repos.service'

@Component({
    selector: 'my-language',
    template: `
        <select class="form-control" [(ngModel)]="selectedRepo" (ngModelChange)="reloadPosts($event)">
            <option [value]="test">Select Language</option>
            <option *ngFor="let repo of repos" [ngValue]="repo">
                {{ repo.name }}
            </option>
        </select>
  `,
    directives: [],
    providers: [githubService, ReposService]
})
export class MyLanguageComponent implements OnInit {
    repos:any[];

    constructor(private _reposService:ReposService,
                private _router:Router) {
    }

    ngOnInit() {
        this.repos = this._reposService.getRepos();
    }

    reloadPosts(selectedLabel) {
        if (selectedLabel.name) {
            this._router.navigate(['Language', {repoName: selectedLabel.name}]);
        }

    }

}