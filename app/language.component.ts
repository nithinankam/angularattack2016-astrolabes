import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';

import {githubService} from './github.service';
import {ReposService} from './repos.service'

@Component({
    selector: 'language',
    template: `<div [innerHtml]="html_content"></div>`,
    directives: [],
    providers: [githubService, ReposService]
})
export class LanguageComponent implements OnInit {
    repoName:string;
    repoObject;
    md_content:any;
    html_content:any;

    constructor(private _githubService:githubService,
                private _reposService:ReposService,
                private _roteParams:RouteParams) {
    }

    ngOnInit() {
        var marked = require('marked');

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
}