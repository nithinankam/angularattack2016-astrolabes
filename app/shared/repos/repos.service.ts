import {Injectable} from '@angular/core'

@Injectable()
export class ReposService {
    private repos = [
        {
            owner: "diegocard",
            repo: "awesome-html5",
            languageStateName: "HTML5",
            languageDisplayName: "HTML5",
            startIndex: "##Articles and standards",
            endIndex: "##Contributing"
        },
        {
            owner: "sotayamashita",
            repo: "awesome-css",
            languageStateName: "CSS",
            languageDisplayName: "CSS",
            startIndex: "## Preprocessors",
            endIndex: "# Contributing"
        },
        {
            owner: "sorrycc",
            repo: "awesome-javascript",
            languageStateName: "JavaScript",
            languageDisplayName: "JavaScript",
            startIndex: "## Package Managers",
            endIndex: "# Contributing"
        },
        {
            owner: "aleksandar-todorovic",
            repo: "awesome-c",
            languageStateName: "C",
            languageDisplayName: "C",
            startIndex: "## Build Systems",
            endIndex: "[396]: http://pjreddie.com/darknet/"
        },
        {
            owner: "fffaraz",
            repo: "awesome-cpp",
            languageStateName: "C/C++",
            languageDisplayName: "C/C++",
            startIndex: "## Standard Libraries",
            endIndex: "# Contributing"
        },
        {
            owner: "akullpp",
            repo: "awesome-java",
            languageStateName: "Java",
            languageDisplayName: "Java",
            startIndex: "## Ancients",
            endIndex: "# Contributing"
        },
        {
            owner: "markets",
            repo: "awesome-ruby",
            languageStateName: "Ruby",
            languageDisplayName: "Ruby",
            startIndex: "## Abstraction",
            endIndex: "# Other Awesome Lists"
        },
        {
            owner: "dzharii",
            repo: "awesome-typescript",
            languageStateName: "TypeScript",
            languageDisplayName: "TypeScript",
            startIndex: "## Getting Started with (awesome) TypeScript",
            endIndex: "### Social"
        },
        {
            owner: "peterkokot",
            repo: "awesome-jquery",
            languageStateName: "JQuery",
            languageDisplayName: "JQuery",
            startIndex: "## Resources",
            endIndex: "## Contributing and License"
        },
        {
            owner: "vinta",
            repo: "awesome-python",
            languageStateName: "Python",
            languageDisplayName: "Python",
            startIndex: "## Environment Management",
            endIndex: "# Contributing"
        },
        {
            owner: "lauris",
            repo: "awesome-scala",
            languageStateName: "Scala",
            languageDisplayName: "Scala",
            startIndex: "## Database",
            endIndex: "# Contributing"
        },
        {
            owner: "kdabir",
            repo: "awesome-groovy",
            languageStateName: "Groovy",
            languageDisplayName: "Groovy",
            startIndex: "## Build tools and Setup",
            endIndex: "# Contributing"
        },
        {
            owner: "AngularClass",
            repo: "awesome-angular2",
            languageStateName: "Angular2",
            languageDisplayName: "Angular 2",
            startIndex: "#### Official Resources",
            endIndex: "## License"
        },
        {
            owner: "gianarb",
            repo: "awesome-angularjs",
            languageStateName: "Angular",
            languageDisplayName: "Angular",
            startIndex: "## Seed Projects",
            endIndex: "## License"
        },
        {
            owner: "enaqx",
            repo: "awesome-react",
            languageStateName: "React",
            languageDisplayName: "React",
            startIndex: "#### React General Resources",
            endIndex: "### License"
        },
        {
            owner: "sadcitizen",
            repo: "awesome-backbone",
            languageStateName: "Backbone",
            languageDisplayName: "Backbone",
            startIndex: "## General",
            endIndex: "- [Backbone.BabySitter](https://github.com/marionettejs/backbone.babysitter)"
        },
        {
            owner: "Urigo",
            repo: "awesome-meteor",
            languageStateName: "Meteor",
            languageDisplayName: "Meteor",
            startIndex: "## Getting Started",
            endIndex: "# [Contributing]"
        },
        {
            owner: "nmec",
            repo: "awesome-ember",
            languageStateName: "Ember",
            languageDisplayName: "Ember",
            startIndex: "## Examples",
            endIndex: "- [Adolfo Builes](https://twitter.com/abuiles)"
        },
        {
            owner: "afonsopacifer",
            repo: "awesome-flexbox",
            languageStateName: "flexbox",
            languageDisplayName: "Flexbox",
            startIndex: "## W3C Specification",
            endIndex: "## Contributing"
        },
        {
            owner: "ChromeDevTools",
            repo: "awesome-chrome-devtools",
            languageStateName: "ChromeDevTools",
            languageDisplayName: "Chrome Dev Tools",
            startIndex: "## Learning",
            endIndex: "-perf Package."
        },
        {
            owner: "candelibas",
            repo: "awesome-ionic2",
            languageStateName: "Ionic2",
            languageDisplayName: "Ionic 2",
            startIndex: "#### Official Resources",
            endIndex: "#### Contribute"
        },
        {
            owner: "dnbard",
            repo: "awesome-knockout",
            languageStateName: "KnockoutJS",
            languageDisplayName: "KnockoutJS",
            startIndex: "## Frameworks",
            endIndex: "using WebSockets and Knockout"
        },
        {
            owner: "raphamorim",
            repo: "awesome-canvas",
            languageStateName: "Canvas",
            languageDisplayName: "Canvas",
            startIndex: "## Examples",
            endIndex: "## License"
        },
        {
            owner: "wbkd",
            repo: "awesome-d3",
            languageStateName: "D3",
            languageDisplayName: "D3",
            startIndex: "## Charts",
            endIndex: "- An Atom package with d3 snippets"
        },
        {
            owner: "veggiemonk",
            repo: "awesome-docker",
            languageStateName: "Docker",
            languageDisplayName: "Docker",
            startIndex: "## Main Resources",
            endIndex: "## People"
        },
        {
            owner: "ekremkaraca",
            repo: "awesome-rails",
            languageStateName: "Rails",
            languageDisplayName: "Rails",
            startIndex: "### Blogging",
            endIndex: "## Notes"
        },
        {
            owner: "fcambus",
            repo: "nginx-resources",
            languageStateName: "nginx",
            languageDisplayName: "Nginx",
            startIndex: "## Understanding Nginx",
            endIndex: "## License"
        },
        {
            owner: "dzharii",
            repo: "awesome-elasticsearch",
            languageStateName: "Elastic-Search",
            languageDisplayName: "Elastic Search",
            startIndex: "## Elastic Stack",
            endIndex: "# Contributing"
        },
        {
            owner: "ramnes",
            repo: "awesome-mongodb",
            languageStateName: "MongoDB",
            languageDisplayName: "MongoDB",
            startIndex: "## Resources",
            endIndex: "## License"
        },
        {
            owner: "d3viant0ne",
            repo: "awesome-rethinkdb",
            languageStateName: "RethinkDB",
            languageDisplayName: "RethinkDB",
            startIndex: "RethinkDB Ecosystem",
            endIndex: "License"
        },
        {
            owner: "onurakpolat",
            repo: "awesome-bigdata",
            languageStateName: "BigData",
            languageDisplayName: "Big Data",
            startIndex: "## RDBMS",
            endIndex: "# Other Awesome Lists"
        },
        {
            owner: "youngwookim",
            repo: "awesome-hadoop",
            languageStateName: "Hadoop",
            languageDisplayName: "Hadoop",
            startIndex: "## Hadoop",
            endIndex: "# Other Awesome Lists"
        },
        {
            owner: "tayllan",
            repo: "awesome-algorithms",
            languageStateName: "Algorithms",
            languageDisplayName: "Algorithms",
            startIndex: "## Websites",
            endIndex: "## License"
        },
        {
            owner: "christian-bromann",
            repo: "awesome-selenium",
            languageStateName: "Selenium",
            languageDisplayName: "Selenium",
            startIndex: "### Tools",
            endIndex: "## License"
        },
        {
            owner: "melvin0008",
            repo: "awesome-projects-boilerplates",
            languageStateName: "Boilerplates",
            languageDisplayName: "Boilerplates",
            startIndex: "## Android Development",
            endIndex: "# [Contributing]"
        },
        {
            owner: "HQarroum",
            repo: "awesome-iot",
            languageStateName: "IOT",
            languageDisplayName: "Internet Of Things",
            startIndex: "### Hardware",
            endIndex: "## License"
        }
    ];

    getRepos() {
        return this.repos;
    }

    getLanguage(name) {
        var result = this.repos.filter(function (obj) {
            return obj.languageStateName == name;
        });
        return result;
    }
}