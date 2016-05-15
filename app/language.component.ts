import {Component, OnInit, Input} from '@angular/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {githubService} from './github.service';
import {ReposService} from './repos.service';

@Component({
    selector: 'language',
    template: `<div [innerHtml]="html_content"></div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [githubService, ReposService]
})
export class LanguageComponent implements OnInit {
    repoName:string;
    repoObject;
    md_content:any;
    html_content:any;
    repos:any;

    constructor(private _githubService:githubService,
                private _reposService:ReposService,
                private _routeParams:RouteParams,
                private _router:Router) {
    }

    ngOnInit() {
        var marked = require('marked');

        this.repos = this._reposService.getRepos();

        this.repoName = this._routeParams.get('repoName');
        this.repoObject = this._reposService.getRepo(this.repoName);
        if (this.repoObject[0]) {
            this._githubService.getReadme(this.repoObject[0].owner, this.repoObject[0].repo)
                .subscribe(result => {
                    this.md_content = atob(result.content);
                    this.html_content = marked(this.md_content);
                });
        } else {
            this._router.navigate(['MyLanguage']);
        }
    }

}