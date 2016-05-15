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
var router_deprecated_2 = require('@angular/router-deprecated');
var github_service_1 = require('./github.service');
var repos_service_1 = require('./repos.service');
var LanguageComponent = (function () {
    function LanguageComponent(_githubService, _reposService, _roteParams) {
        this._githubService = _githubService;
        this._reposService = _reposService;
        this._roteParams = _roteParams;
        this.toggle = true;
    }
    LanguageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var marked = require('marked');
        this.repos = this._reposService.getRepos();
        if (this._roteParams.get('repoName')) {
            this.repoName = this._roteParams.get('repoName');
            this.repoObject = this._reposService.getRepo(this.repoName);
            this._githubService.getReadme(this.repoObject[0].owner, this.repoObject[0].repo)
                .subscribe(function (result) {
                _this.md_content = atob(result.content);
                _this.html_content = marked(_this.md_content);
            });
        }
    };
    LanguageComponent.prototype.clickedIt = function () {
        this.toggle = !this.toggle;
    };
    LanguageComponent = __decorate([
        core_1.Component({
            selector: 'language',
            templateUrl: 'app/language.component.html',
            directives: [router_deprecated_2.ROUTER_DIRECTIVES],
            providers: [github_service_1.githubService, repos_service_1.ReposService]
        }), 
        __metadata('design:paramtypes', [github_service_1.githubService, repos_service_1.ReposService, router_deprecated_1.RouteParams])
    ], LanguageComponent);
    return LanguageComponent;
}());
exports.LanguageComponent = LanguageComponent;
//# sourceMappingURL=language.component.js.map