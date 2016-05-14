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
var AppComponent = (function () {
    function AppComponent(_githubService) {
        this._githubService = _githubService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.repos = [
            { owner: "sindresorhus", repo: "awesome", name: "Main Awesome Repo" },
            { owner: "gianarb", repo: "awesome-angularjs", name: "Angular" },
            { owner: "AngularClass", repo: "awesome-angular2", name: "Angular2" },
            { owner: "sadcitizen", repo: "awesome-backbone", name: "Backbone" },
            { owner: "dnbard", repo: "awesome-knockout", name: "Knockout" },
            { owner: "Urigo", repo: "awesome-meteor", name: "Meteor" },
            { owner: "nmec", repo: "awesome-ember", name: "Ember" },
            { owner: "behzad888", repo: "awesome-aurelia", name: "Aurelia" },
            { owner: "lauris", repo: "awesome-scala", name: "Scala" }
        ];
        // main 'awesome' repo that points to each languages
        this.reloadPosts(this.repos[0]);
    };
    AppComponent.prototype.reloadPosts = function (label) {
        var _this = this;
        var marked = require('marked');
        this.readmeData = ''; // once user click on 'select language' dropdown
        if (label.owner && label.repo) {
            this._githubService.getReadme(label.owner, label.repo)
                .subscribe(function (result) {
                _this.readmeData = atob(result.content);
                _this.md_content = _this.readmeData;
                _this.html_content = marked(_this.md_content);
            });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <select class=\"form-control\" [(ngModel)]=\"selectedRepo\" (ngModelChange)=\"reloadPosts($event)\">\n            <option [value]=\"test\">Select Language</option>\n            <option *ngFor=\"let repo of repos\" [ngValue]=\"repo\">\n                {{ repo.name }}\n            </option>\n        </select>\n        <br>\n        <div [innerHtml]=\"html_content\"></div>\n        ",
            directives: [],
            providers: [github_service_1.githubService]
        }), 
        __metadata('design:paramtypes', [github_service_1.githubService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map