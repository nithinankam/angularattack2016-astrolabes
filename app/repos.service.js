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
            { owner: "diegocard", repo: "awesome-html5", languageStateName: "HTML5", languageDisplayName: "HTML5", technologyStateName: "Front-End" },
            { owner: "sotayamashita", repo: "awesome-css", languageStateName: "CSS", languageDisplayName: "CSS", ype: "Front-End" },
            { owner: "AngularClass", repo: "awesome-angular2", languageStateName: "JavaScript", languageDisplayName: "JavaScript", technologyStateName: "Front-End" },
            { owner: "aleksandar-todorovic", repo: "awesome-c", languageStateName: "C", languageDisplayName: "C", technologyStateName: "Front-End" },
            { owner: "fffaraz", repo: "awesome-cpp", languageStateName: "C/C++", languageDisplayName: "C/C++", technologyStateName: "Front-End" },
            { owner: "akullpp", repo: "awesome-java", languageStateName: "Java", languageDisplayName: "Java", technologyStateName: "Front-End" },
            { owner: "markets", repo: "awesome-ruby", languageStateName: "Ruby", languageDisplayName: "Ruby", technologyStateName: "Front-End" },
            { owner: "dzharii", repo: "awesome-typescript", languageStateName: "TypeScript", languageDisplayName: "TypeScript", technologyStateName: "Front-End" },
            { owner: "peterkokot", repo: "awesome-jquery", languageStateName: "JQuery", languageDisplayName: "JQuery", technologyStateName: "Front-End" },
            { owner: "vinta", repo: "awesome-python", languageStateName: "Python", languageDisplayName: "Python", technologyStateName: "Front-End" },
            { owner: "lauris", repo: "awesome-scala", languageStateName: "Scala", languageDisplayName: "Scala", technologyStateName: "Front-End" },
            { owner: "kdabir", repo: "awesome-groovy", languageStateName: "Groovy", languageDisplayName: "Groovy", technologyStateName: "Front-End" },
            { owner: "AngularClass", repo: "awesome-angular2", languageStateName: "Angular2", languageDisplayName: "Angular 2", technologyStateName: "Front-End" },
            { owner: "gianarb", repo: "awesome-angularjs", languageStateName: "Angular", languageDisplayName: "Angular", technologyStateName: "Front-End" },
            { owner: "enaqx", repo: "awesome-react", languageStateName: "React", languageDisplayName: "React", technologyStateName: "Front-End" },
            { owner: "sadcitizen", repo: "awesome-backbone", languageStateName: "Backbone", languageDisplayName: "Backbone", technologyStateName: "Front-End" },
            { owner: "Urigo", repo: "awesome-meteor", languageStateName: "Meteor", languageDisplayName: "Meteor", technologyStateName: "Front-End" },
            { owner: "nmec", repo: "awesome-ember", languageStateName: "Ember", languageDisplayName: "Ember", technologyStateName: "Front-End" },
            { owner: "wasabeef", repo: "awesome-android-ui", languageStateName: "Android-UI", languageDisplayName: "Android UI", technologyStateName: "Back-End" },
            { owner: "cjwirth", repo: "awesome-ios-ui", languageStateName: "iOS-UI", languageDisplayName: "iOS UI", technologyStateName: "Back-End" },
            { owner: "candelibas", repo: "awesome-ionic2", languageStateName: "Ionic2", languageDisplayName: "Ionic 2", technologyStateName: "Back-End" },
            { owner: "willianjusten", repo: "awesome-svg", languageStateName: "SVG", languageDisplayName: "SVG", technologyStateName: "Back-End" },
            { owner: "raphamorim", repo: "awesome-canvas", languageStateName: "Canvas", languageDisplayName: "Canvas", technologyStateName: "Back-End" },
            { owner: "wbkd", repo: "awesome-d3", languageStateName: "D3", languageDisplayName: "D3", technologyStateName: "Back-End" },
            { owner: "veggiemonk", repo: "awesome-docker", languageStateName: "Docker", languageDisplayName: "Docker", technologyStateName: "Back-End" },
            { owner: "ekremkaraca", repo: "awesome-rails", languageStateName: "Rails", languageDisplayName: "Rails", technologyStateName: "Back-End" },
            { owner: "fcambus", repo: "nginx-resources", languageStateName: "nginx", languageDisplayName: "nginx", technologyStateName: "Back-End" },
            { owner: "dzharii", repo: "awesome-elasticsearch", languageStateName: "Elastic-Search", languageDisplayName: "Elastic Search", technologyStateName: "Back-End" },
            { owner: "ramnes", repo: "awesome-mongodb", languageStateName: "MongoDB", languageDisplayName: "MongoDB", technologyStateName: "Back-End" },
            { owner: "d3viant0ne", repo: "awesome-rethinkdb", languageStateName: "RethinkDB", languageDisplayName: "RethinkDB", technologyStateName: "Back-End" },
            { owner: "onurakpolat", repo: "awesome-bigdata", languageStateName: "BigData", languageDisplayName: "BigData", technologyStateName: "Back-End" },
            { owner: "youngwookim", repo: "awesome-hadoop", languageStateName: "Hadoop", languageDisplayName: "Hadoop", technologyStateName: "Back-End" },
            { owner: "tayllan", repo: "awesome-algorithms", languageStateName: "Algorithms", languageDisplayName: "Algorithms", technologyStateName: "Back-End" },
            { owner: "christian-bromann", repo: "awesome-selenium", languageStateName: "Selenium", languageDisplayName: "Selenium", technologyStateName: "Back-End" },
            { owner: "melvin0008", repo: "awesome-projects-boilerplates", languageStateName: "Boilerplates", languageDisplayName: "Boilerplates", technologyStateName: "Back-End" },
            { owner: "HQarroum", repo: "awesome-iot", languageStateName: "IOT", languageDisplayName: "Internet Of Things", technologyStateName: "Back-End" }
        ];
    }
    ReposService.prototype.getRepos = function () {
        return this.repos;
    };
    ReposService.prototype.getLanguage = function (name) {
        var result = this.repos.filter(function (obj) {
            return obj.languageStateName == name;
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