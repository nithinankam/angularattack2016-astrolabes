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
    languageName:string;
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
        if (this.repoObject[0]) {
            this._githubService.getReadme(this.repoObject[0].owner, this.repoObject[0].repo)
                .subscribe(result => {
                    this.md_content = atob(result.content);
                    this.startIndex = this.md_content.indexOf(this.repoObject[0].startIndex);
                    this.endIndex = this.md_content.indexOf(this.repoObject[0].endIndex);

                    if(this.startIndex != -1 && this.endIndex != -1 && this.startIndex!= this.endIndex) {
                        this.parsed_md_content = this.md_content.slice(this.startIndex, this.endIndex);
                        this.html_content = marked(this.parsed_md_content);
                    }else{
                        this.html_content = marked(this.md_content);
                    }
                });

        } else {
            this._router.navigate(['MyLanguage']);
        }
    }

}