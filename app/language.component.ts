import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';


import {githubService} from './github.service';
import {ReposService} from './repos.service'

@Component({
    selector: 'language',
    template: `
    <div id="wrapper" [ngClass]="{toggled:toggle}">
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                   <a>Sidebar</a>
                </li>
                <li *ngFor="let repo of repos" [routerLink]="['Language', {repoName:repo.name}]">
                    <a>{{repo.name}}</a>
                </li>
            </ul>
        </div>
        <div id="page-content-wrapper">
            <div class="container-fluid">
              <a class="btn btn-default" id="menu-toggle" (click)="clickedIt()">Toggle Menu</a>
              <div [innerHtml]="html_content"></div>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [githubService, ReposService]
})
export class LanguageComponent implements OnInit {
    repoName:string;
    repoObject;
    md_content:any;
    html_content:any;
    toggle = true;
    repos: any;

    constructor(private _githubService:githubService,
                private _reposService:ReposService,
                private _roteParams:RouteParams) {
    }

    ngOnInit() {
        var marked = require('marked');

        this.repos = this._reposService.getRepos();

        if (this._roteParams.get('repoName')){
            this.repoName = this._roteParams.get('repoName');
            this.repoObject = this._reposService.getRepo(this.repoName);
            this._githubService.getReadme(this.repoObject[0].owner, this.repoObject[0].repo)
                .subscribe(result => {
                    this.md_content = atob(result.content);
                    this.html_content = marked(this.md_content);
                });
        }
    }

    clickedIt() {
        this.toggle = !this.toggle;

    }
}