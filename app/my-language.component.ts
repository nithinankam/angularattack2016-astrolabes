import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {githubService} from './github.service';
import {ReposService} from './repos.service'
import {PaginationComponent} from './pagination.component'
import * as _ from 'lodash';

@Component({
    selector: 'my-language',
    templateUrl: 'app/my-language.component.html',
    directives: [PaginationComponent],
    providers: [githubService, ReposService],
    styleUrls: ['app/my-language.component.css']
})
export class MyLanguageComponent implements OnInit {
    repos:any[];
    paginatedRepos = [];
    pageSize = 12;

    constructor(private _reposService:ReposService,
                private _router:Router) {
    }

    ngOnInit() {
        this.repos = this._reposService.getRepos();
        this.paginatedRepos = _.take(this.repos, this.pageSize);
    }

    navigateToLanguage(selectedLanguage) {
        if (selectedLanguage.name) {
            this._router.navigate(['Language', {repoName: selectedLanguage.name}]);
        }
    }

    onPageChanged(page) {
        var startIndex = (page - 1) * this.pageSize;
        this.paginatedRepos = _.take(_.drop(this.repos, startIndex), this.pageSize);
    }
}