import {Component, OnInit} from '@angular/core';
import {githubService} from './github.service';
import {ReposService} from './repos.service'
//import marked from 'marked';

@Component({
    selector: 'my-language',
    template: `
        <select class="form-control" [(ngModel)]="selectedRepo" (ngModelChange)="reloadPosts($event)">
            <option [value]="test">Select Language</option>
            <option *ngFor="let repo of repos" [ngValue]="repo">
                {{ repo.name }}
            </option>
        </select>
        <br>
        <div [innerHtml]="html_content"></div>
  `,
    directives: [],
    providers: [githubService, ReposService]
})
export class MyLanguageComponent implements OnInit {
    repos:any[];
    md_content:any;
    html_content:any;

    constructor(private _githubService:githubService,
                private _reposService:ReposService) {
    }

    ngOnInit() {
        this.repos = this._reposService.getRepos();
        // main 'awesome' repo that points to each languages
        this.reloadPosts(this.repos[0]);
    }

    reloadPosts(label) {
        //var marked = require('marked');
        this.md_content = '';   // once user click on 'select language' dropdown
        if (label.owner && label.repo) {
            this._githubService.getReadme(label.owner, label.repo)
                .subscribe(result => {
                    this.md_content = atob(result.content);
                    this.html_content = this.md_content;
                    //this.html_content = marked(this.md_content);
                });
        }

    }

}