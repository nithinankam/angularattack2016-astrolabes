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
var ReposService = (function () {
    function ReposService() {
        this.repos = [
            { owner: "sindresorhus", repo: "awesome", name: "MainRepo" },
            { owner: "gianarb", repo: "awesome-angularjs", name: "Angular" },
            { owner: "AngularClass", repo: "awesome-angular2", name: "Angular2" },
            { owner: "sadcitizen", repo: "awesome-backbone", name: "Backbone" },
            { owner: "dnbard", repo: "awesome-knockout", name: "Knockout" },
            { owner: "Urigo", repo: "awesome-meteor", name: "Meteor" },
            { owner: "nmec", repo: "awesome-ember", name: "Ember" },
            { owner: "behzad888", repo: "awesome-aurelia", name: "Aurelia" },
            { owner: "lauris", repo: "awesome-scala", name: "Scala" }
        ];
    }
    ReposService.prototype.getRepos = function () {
        return this.repos;
    };
    ReposService.prototype.getRepo = function (name) {
        var result = this.repos.filter(function (obj) {
            return obj.name == name;
        });
        return result;
    };
    ReposService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ReposService);
    return ReposService;
}());
exports.ReposService = ReposService;
//# sourceMappingURL=repos.service.js.map