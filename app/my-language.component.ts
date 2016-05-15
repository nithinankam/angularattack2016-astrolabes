import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {githubService} from './github.service';
import {ReposService} from './repos.service'

@Component({
    selector: 'my-language',
    templateUrl: 'app/my-language.component.html',
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

    navigateToLanguage(selectedLanguage) {
        if (selectedLanguage.name) {
            this._router.navigate(['Language', {repoName: selectedLanguage.name}]);
        }

    }

}