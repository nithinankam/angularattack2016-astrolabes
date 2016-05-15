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
            { owner: "diegocard", repo: "awesome-html5", languageStateName: "HTML5", languageDisplayName: "HTML5", technologyStateName: "Front-End", startIndex: "##Articles and standards", endIndex: "##Contributing" },
            { owner: "sotayamashita", repo: "awesome-css", languageStateName: "CSS", languageDisplayName: "CSS", ype: "Front-End", startIndex: "## Preprocessors", endIndex: "# Contributing" },
            { owner: "sorrycc", repo: "awesome-javascript", languageStateName: "JavaScript", languageDisplayName: "JavaScript", technologyStateName: "Front-End", startIndex: "## Package Managers", endIndex: "# Contributing" },
            { owner: "aleksandar-todorovic", repo: "awesome-c", languageStateName: "C", languageDisplayName: "C", technologyStateName: "Front-End", startIndex: "## Build Systems", endIndex: "[396]: http://pjreddie.com/darknet/" },
            { owner: "fffaraz", repo: "awesome-cpp", languageStateName: "C/C++", languageDisplayName: "C/C++", technologyStateName: "Front-End", startIndex: "## Standard Libraries", endIndex: "# Contributing" },
            { owner: "akullpp", repo: "awesome-java", languageStateName: "Java", languageDisplayName: "Java", technologyStateName: "Front-End", startIndex: "## Ancients", endIndex: "# Contributing" },
            { owner: "markets", repo: "awesome-ruby", languageStateName: "Ruby", languageDisplayName: "Ruby", technologyStateName: "Front-End", startIndex: "## Abstraction", endIndex: "# Other Awesome Lists" },
            { owner: "dzharii", repo: "awesome-typescript", languageStateName: "TypeScript", languageDisplayName: "TypeScript", technologyStateName: "Front-End", startIndex: "## Getting Started with (awesome) TypeScript", endIndex: "### Social" },
            { owner: "peterkokot", repo: "awesome-jquery", languageStateName: "JQuery", languageDisplayName: "JQuery", technologyStateName: "Front-End", startIndex: "## Resources", endIndex: "## Contributing and License" },
            { owner: "vinta", repo: "awesome-python", languageStateName: "Python", languageDisplayName: "Python", technologyStateName: "Front-End", startIndex: "## Environment Management", endIndex: "# Contributing" },
            { owner: "lauris", repo: "awesome-scala", languageStateName: "Scala", languageDisplayName: "Scala", technologyStateName: "Front-End", startIndex: "## Database", endIndex: "# Contributing" },
            { owner: "kdabir", repo: "awesome-groovy", languageStateName: "Groovy", languageDisplayName: "Groovy", technologyStateName: "Front-End", startIndex: "## Build tools and Setup", endIndex: "# Contributing" },
            { owner: "AngularClass", repo: "awesome-angular2", languageStateName: "Angular2", languageDisplayName: "Angular 2", technologyStateName: "Front-End", startIndex: "#### Official Resources", endIndex: "## License" },
            { owner: "gianarb", repo: "awesome-angularjs", languageStateName: "Angular", languageDisplayName: "Angular", technologyStateName: "Front-End", startIndex: "## Seed Projects", endIndex: "## License" },
            { owner: "enaqx", repo: "awesome-react", languageStateName: "React", languageDisplayName: "React", technologyStateName: "Front-End", startIndex: "### React", endIndex: "### License" },
            { owner: "sadcitizen", repo: "awesome-backbone", languageStateName: "Backbone", languageDisplayName: "Backbone", technologyStateName: "Front-End", startIndex: "## General", endIndex: "- [Backbone.BabySitter](https://github.com/marionettejs/backbone.babysitter)" },
            { owner: "Urigo", repo: "awesome-meteor", languageStateName: "Meteor", languageDisplayName: "Meteor", technologyStateName: "Front-End", startIndex: "## Getting Started", endIndex: "# [Contributing]" },
            { owner: "nmec", repo: "awesome-ember", languageStateName: "Ember", languageDisplayName: "Ember", technologyStateName: "Front-End", startIndex: "## Examples", endIndex: "- [Adolfo Builes](https://twitter.com/abuiles)" },
            { owner: "afonsopacifer", repo: "awesome-flexbox", languageStateName: "flexbox", languageDisplayName: "Flexbox", technologyStateName: "Back-End", startIndex: "## W3C Specification", endIndex: "## Contributing" },
            { owner: "ChromeDevTools", repo: "awesome-chrome-devtools", languageStateName: "ChromeDevTools", languageDisplayName: "Chrome Dev Tools", technologyStateName: "Back-End", startIndex: "## Learning", endIndex: "-perf Package." },
            { owner: "candelibas", repo: "awesome-ionic2", languageStateName: "Ionic2", languageDisplayName: "Ionic 2", technologyStateName: "Back-End", startIndex: "#### Official Resources", endIndex: "#### Contribute" },
            { owner: "dnbard", repo: "awesome-knockout", languageStateName: "KnockoutJS", languageDisplayName: "KnockoutJS", technologyStateName: "Back-End", startIndex: "## Frameworks", endIndex: "using WebSockets and Knockout" },
            { owner: "raphamorim", repo: "awesome-canvas", languageStateName: "Canvas", languageDisplayName: "Canvas", technologyStateName: "Back-End", startIndex: "## Examples", endIndex: "## License" },
            { owner: "wbkd", repo: "awesome-d3", languageStateName: "D3", languageDisplayName: "D3", technologyStateName: "Back-End", startIndex: "## Charts", endIndex: "- An Atom package with d3 snippets" },
            { owner: "veggiemonk", repo: "awesome-docker", languageStateName: "Docker", languageDisplayName: "Docker", technologyStateName: "Back-End", startIndex: "## Main Resources", endIndex: "## People" },
            { owner: "ekremkaraca", repo: "awesome-rails", languageStateName: "Rails", languageDisplayName: "Rails", technologyStateName: "Back-End", startIndex: "### Blogging", endIndex: "## Notes" },
            { owner: "fcambus", repo: "nginx-resources", languageStateName: "nginx", languageDisplayName: "nginx", technologyStateName: "Back-End", startIndex: "## Understanding Nginx", endIndex: "## License" },
            { owner: "dzharii", repo: "awesome-elasticsearch", languageStateName: "Elastic-Search", languageDisplayName: "Elastic Search", technologyStateName: "Back-End", startIndex: "## Elastic Stack", endIndex: "# Contributing" },
            { owner: "ramnes", repo: "awesome-mongodb", languageStateName: "MongoDB", languageDisplayName: "MongoDB", technologyStateName: "Back-End", startIndex: "## Resources", endIndex: "## License" },
            { owner: "d3viant0ne", repo: "awesome-rethinkdb", languageStateName: "RethinkDB", languageDisplayName: "RethinkDB", technologyStateName: "Back-End", startIndex: "RethinkDB Ecosystem", endIndex: "License" },
            { owner: "onurakpolat", repo: "awesome-bigdata", languageStateName: "BigData", languageDisplayName: "BigData", technologyStateName: "Back-End", startIndex: "## RDBMS", endIndex: "# Other Awesome Lists" },
            { owner: "youngwookim", repo: "awesome-hadoop", languageStateName: "Hadoop", languageDisplayName: "Hadoop", technologyStateName: "Back-End", startIndex: "## Hadoop", endIndex: "# Other Awesome Lists" },
            { owner: "tayllan", repo: "awesome-algorithms", languageStateName: "Algorithms", languageDisplayName: "Algorithms", technologyStateName: "Back-End", startIndex: "## Websites", endIndex: "## License" },
            { owner: "christian-bromann", repo: "awesome-selenium", languageStateName: "Selenium", languageDisplayName: "Selenium", technologyStateName: "Back-End", startIndex: "### Tools", endIndex: "## License" },
            { owner: "melvin0008", repo: "awesome-projects-boilerplates", languageStateName: "Boilerplates", languageDisplayName: "Boilerplates", technologyStateName: "Back-End", startIndex: "## Android Development", endIndex: "# [Contributing]" },
            { owner: "HQarroum", repo: "awesome-iot", languageStateName: "IOT", languageDisplayName: "Internet Of Things", technologyStateName: "Back-End", startIndex: "### Hardware", endIndex: "## License" }
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