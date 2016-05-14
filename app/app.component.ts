import {Component, OnInit} from '@angular/core';
import {githubService} from './github.service';
import marked from 'marked';

@Component({
    selector: 'my-app',
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
    providers: [githubService]
})
export class AppComponent implements OnInit {
    repos:any[];
    md_content: any;
    html_content : any;

    constructor(private _githubService:githubService) {
    }

    ngOnInit() {
        this.repos = [
            {owner: "sindresorhus", repo: "awesome", name: "Main Awesome Repo"},
            {owner: "gianarb", repo: "awesome-angularjs", name: "Angular"},
            {owner: "AngularClass", repo: "awesome-angular2", name: "Angular2"},
            {owner: "sadcitizen", repo: "awesome-backbone", name: "Backbone"},
            {owner: "dnbard", repo: "awesome-knockout", name: "Knockout"},
            {owner: "Urigo", repo: "awesome-meteor", name: "Meteor"},
            {owner: "nmec", repo: "awesome-ember", name: "Ember"},
            {owner: "behzad888", repo: "awesome-aurelia", name: "Aurelia"},
            {owner: "lauris", repo: "awesome-scala", name: "Scala"}
        ];

        // main 'awesome' repo that points to each languages
        this.reloadPosts(this.repos[0]);
    }

    reloadPosts(label) {
        var marked = require('marked');
        this.md_content = '';   // once user click on 'select language' dropdown
        if (label.owner && label.repo) {
            this._githubService.getReadme(label.owner, label.repo)
                .subscribe(result => {
                    this.md_content = atob(result.content);
                    this.html_content = marked(this.md_content);
                });
        }

    }


}
