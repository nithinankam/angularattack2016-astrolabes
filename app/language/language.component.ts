import {Component, OnInit, Input} from '@angular/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {githubService} from './../shared/github/github.service';
import {ReposService} from './../shared/repos/repos.service';

@Component({
    selector: 'language',
    template: `<h1>{{pageHeading}}</h1><div [innerHtml]="html_content"></div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [githubService, ReposService]
})

export class LanguageComponent implements OnInit {
    languageName:string;
    pageHeading:string;
    repoObject;
    md_content:any;
    html_content:any;
    repos:any;
    parsed_md_content:any;
    startIndex:any;
    endIndex:any;

    constructor(private _githubService:githubService,
                private _reposService:ReposService,
                private _routeParams:RouteParams,
                private _router:Router) {
    }

    ngOnInit() {
        var marked = require('marked');

        this.repos = this._reposService.getRepos();
        this.languageName = this._routeParams.get('languageName');
        this.repoObject = this._reposService.getLanguage(this.languageName);
        this.pageHeading = this.repoObject[0].languageDisplayName;
        if (this.repoObject[0]) {
            this._githubService.getReadme(this.repoObject[0].owner, this.repoObject[0].repo)
                .subscribe(result => {
                    this.md_content = atob(result.content);
                    this.startIndex = this.md_content.indexOf(this.repoObject[0].startIndex);
                    this.endIndex = this.md_content.indexOf(this.repoObject[0].endIndex);

                    if (this.startIndex != -1 && this.endIndex != -1 && this.startIndex != this.endIndex) {
                        this.parsed_md_content = this.md_content.slice(this.startIndex, this.endIndex);
                        this.html_content = marked(this.parsed_md_content);
                    } else {
                        this.html_content = marked(this.md_content);
                    }
                });

        } else {
            this._router.navigate(['AllLanguages']);
        }
    }

}