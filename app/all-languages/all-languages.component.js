"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var _ = require('lodash');
var github_service_1 = require('./../shared/github/github.service');
var repos_service_1 = require('./../shared/repos/repos.service');
var pagination_component_1 = require('./../shared/pagination/pagination.component');
var AllLanguagesComponent = (function () {
    function AllLanguagesComponent(_reposService, _router) {
        this._reposService = _reposService;
        this._router = _router;
        this.paginatedRepos = [];
        this.pageSize = 12;
    }
    AllLanguagesComponent.prototype.ngOnInit = function () {
        this.repos = this._reposService.getRepos();
        this.paginatedRepos = _.take(this.repos, this.pageSize);
    };
    AllLanguagesComponent.prototype.navigateToLanguage = function (selectedLanguage) {
        if (selectedLanguage.languageStateName) {
            this._router.navigate(['Language', { languageName: selectedLanguage.languageStateName }]);
        }
    };
    AllLanguagesComponent.prototype.onPageChanged = function (page) {
        var startIndex = (page - 1) * this.pageSize;
        this.paginatedRepos = _.take(_.drop(this.repos, startIndex), this.pageSize);
    };
    AllLanguagesComponent = __decorate([
        core_1.Component({
            selector: 'my-language',
            templateUrl: 'app/all-languages/all-languages.component.html',
            directives: [pagination_component_1.PaginationComponent],
            providers: [github_service_1.githubService, repos_service_1.ReposService],
            styleUrls: ['app/all-languages/all-languages.component.css']
        }), 
        __metadata('design:paramtypes', [repos_service_1.ReposService, router_deprecated_1.Router])
    ], AllLanguagesComponent);
    return AllLanguagesComponent;
}());
exports.AllLanguagesComponent = AllLanguagesComponent;
//# sourceMappingURL=all-languages.component.js.map