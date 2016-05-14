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
var github_service_1 = require('./github.service');
var repos_service_1 = require('./repos.service');
//import marked from 'marked';
var MyLanguageComponent = (function () {
    function MyLanguageComponent(_githubService, _reposService) {
        this._githubService = _githubService;
        this._reposService = _reposService;
    }
    MyLanguageComponent.prototype.ngOnInit = function () {
        this.repos = this._reposService.getRepos();
        // main 'awesome' repo that points to each languages
        this.reloadPosts(this.repos[0]);
    };
    MyLanguageComponent.prototype.reloadPosts = function (label) {
        var _this = this;
        //var marked = require('marked');
        this.md_content = ''; // once user click on 'select language' dropdown
        if (label.owner && label.repo) {
            this._githubService.getReadme(label.owner, label.repo)
                .subscribe(function (result) {
                _this.md_content = atob(result.content);
                _this.html_content = _this.md_content;
                //this.html_content = marked(this.md_content);
            });
        }
    };
    MyLanguageComponent = __decorate([
        core_1.Component({
            selector: 'my-language',
            template: "\n        <select class=\"form-control\" [(ngModel)]=\"selectedRepo\" (ngModelChange)=\"reloadPosts($event)\">\n            <option [value]=\"test\">Select Language</option>\n            <option *ngFor=\"let repo of repos\" [ngValue]=\"repo\">\n                {{ repo.name }}\n            </option>\n        </select>\n        <br>\n        <div [innerHtml]=\"html_content\"></div>\n  ",
            directives: [],
            providers: [github_service_1.githubService, repos_service_1.ReposService]
        }), 
        __metadata('design:paramtypes', [github_service_1.githubService, repos_service_1.ReposService])
    ], MyLanguageComponent);
    return MyLanguageComponent;
}());
exports.MyLanguageComponent = MyLanguageComponent;
//# sourceMappingURL=my-language.component.js.map