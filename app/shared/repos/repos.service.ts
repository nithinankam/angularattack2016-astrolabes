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
            endIndex: "##Contributing",
            image: "assets/images/iot.png"
        },
        {
            owner: "sotayamashita",
            repo: "awesome-css",
            languageStateName: "CSS",
            languageDisplayName: "CSS",
            startIndex: "## Preprocessors",
            endIndex: "# Contributing",
            image: "assets/images/iot.png"
        },
        {
            owner: "sorrycc",
            repo: "awesome-javascript",
            languageStateName: "JavaScript",
            languageDisplayName: "JavaScript",
            startIndex: "## Package Managers",
            endIndex: "# Contributing",
            image: "assets/images/iot.png"
        },
        {
            owner: "aleksandar-todorovic",
            repo: "awesome-c",
            languageStateName: "C",
            languageDisplayName: "C",
            startIndex: "## Build Systems",
            endIndex: "[396]: http://pjreddie.com/darknet/",
            image: "assets/images/iot.png"
        },
        {
            owner: "fffaraz",
            repo: "awesome-cpp",
            languageStateName: "C/C++",
            languageDisplayName: "C/C++",
            startIndex: "## Standard Libraries",
            endIndex: "# Contributing",
            image: "assets/images/iot.png"
        },
        {
            owner: "akullpp",
            repo: "awesome-java",
            languageStateName: "Java",
            languageDisplayName: "Java",
            startIndex: "## Ancients",
            endIndex: "# Contributing",
            image: "assets/images/iot.png"
        },
        {
            owner: "markets",
            repo: "awesome-ruby",
            languageStateName: "Ruby",
            languageDisplayName: "Ruby",
            startIndex: "## Abstraction",
            endIndex: "# Other Awesome Lists",
            image: "assets/images/iot.png"
        },
        {
            owner: "dzharii",
            repo: "awesome-typescript",
            languageStateName: "TypeScript",
            languageDisplayName: "TypeScript",
            startIndex: "## Getting Started with (awesome) TypeScript",
            endIndex: "### Social",
            image: "assets/images/iot.png"
        },
        {
            owner: "peterkokot",
            repo: "awesome-jquery",
            languageStateName: "JQuery",
            languageDisplayName: "JQuery",
            startIndex: "## Resources",
            endIndex: "## Contributing and License",
            image: "assets/images/iot.png"
        },
        {
            owner: "vinta",
            repo: "awesome-python",
            languageStateName: "Python",
            languageDisplayName: "Python",
            startIndex: "## Environment Management",
            endIndex: "# Contributing",
            image: "assets/images/iot.png"
        },
        {
            owner: "lauris",
            repo: "awesome-scala",
            languageStateName: "Scala",
            languageDisplayName: "Scala",
            startIndex: "## Database",
            endIndex: "# Contributing",
            image: "assets/images/iot.png"
        },
        {
            owner: "kdabir",
            repo: "awesome-groovy",
            languageStateName: "Groovy",
            languageDisplayName: "Groovy",
            startIndex: "## Build tools and Setup",
            endIndex: "# Contributing",
            image: "assets/images/iot.png"
        },
        {
            owner: "AngularClass",
            repo: "awesome-angular2",
            languageStateName: "Angular2",
            languageDisplayName: "Angular 2",
            startIndex: "#### Official Resources",
            endIndex: "## License",
            image: "assets/images/iot.png"
        },
        {
            owner: "gianarb",
            repo: "awesome-angularjs",
            languageStateName: "Angular",
            languageDisplayName: "Angular",
            startIndex: "## Seed Projects",
            endIndex: "## License",
            image: "assets/images/iot.png"
        },
        {
            owner: "enaqx",
            repo: "awesome-react",
            languageStateName: "React",
            languageDisplayName: "React",
            startIndex: "#### React General Resources",
            endIndex: "### License",
            image: "assets/images/iot.png"
        },
        {
            owner: "sadcitizen",
            repo: "awesome-backbone",
            languageStateName: "Backbone",
            languageDisplayName: "Backbone",
            startIndex: "## General",
            endIndex: "- [Backbone.BabySitter](https://github.com/marionettejs/backbone.babysitter)",
            image: "assets/images/iot.png"
        },
        {
            owner: "Urigo",
            repo: "awesome-meteor",
            languageStateName: "Meteor",
            languageDisplayName: "Meteor",
            startIndex: "## Getting Started",
            endIndex: "# [Contributing]",
            image: "assets/images/iot.png"
        },
        {
            owner: "nmec",
            repo: "awesome-ember",
            languageStateName: "Ember",
            languageDisplayName: "Ember",
            startIndex: "## Examples",
            endIndex: "- [Adolfo Builes](https://twitter.com/abuiles)",
            image: "assets/images/iot.png"
        },
        {
            owner: "afonsopacifer",
            repo: "awesome-flexbox",
            languageStateName: "flexbox",
            languageDisplayName: "Flexbox",
            startIndex: "## W3C Specification",
            endIndex: "## Contributing",
            image: "assets/images/iot.png"
        },
        {
            owner: "ChromeDevTools",
            repo: "awesome-chrome-devtools",
            languageStateName: "ChromeDevTools",
            languageDisplayName: "Chrome Dev Tools",
            startIndex: "## Learning",
            endIndex: "-perf Package.",
            image: "assets/images/iot.png"
        },
        {
            owner: "candelibas",
            repo: "awesome-ionic2",
            languageStateName: "Ionic2",
            languageDisplayName: "Ionic 2",
            startIndex: "#### Official Resources",
            endIndex: "#### Contribute",
            image: "assets/images/iot.png"
        },
        {
            owner: "dnbard",
            repo: "awesome-knockout",
            languageStateName: "KnockoutJS",
            languageDisplayName: "KnockoutJS",
            startIndex: "## Frameworks",
            endIndex: "using WebSockets and Knockout",
            image: "assets/images/iot.png"
        },
        {
            owner: "raphamorim",
            repo: "awesome-canvas",
            languageStateName: "Canvas",
            languageDisplayName: "Canvas",
            startIndex: "## Examples",
            endIndex: "## License",
            image: "assets/images/iot.png"
        },
        {
            owner: "wbkd",
            repo: "awesome-d3",
            languageStateName: "D3",
            languageDisplayName: "D3",
            startIndex: "## Charts",
            endIndex: "- An Atom package with d3 snippets",
            image: "assets/images/iot.png"
        },
        {
            owner: "veggiemonk",
            repo: "awesome-docker",
            languageStateName: "Docker",
            languageDisplayName: "Docker",
            startIndex: "## Main Resources",
            endIndex: "## People",
            image: "assets/images/iot.png"
        },
        {
            owner: "ekremkaraca",
            repo: "awesome-rails",
            languageStateName: "Rails",
            languageDisplayName: "Rails",
            startIndex: "### Blogging",
            endIndex: "## Notes",
            image: "assets/images/iot.png"
        },
        {
            owner: "fcambus",
            repo: "nginx-resources",
            languageStateName: "nginx",
            languageDisplayName: "Nginx",
            startIndex: "## Understanding Nginx",
            endIndex: "## License",
            image: "assets/images/iot.png"
        },
        {
            owner: "dzharii",
            repo: "awesome-elasticsearch",
            languageStateName: "Elastic-Search",
            languageDisplayName: "Elastic Search",
            startIndex: "## Elastic Stack",
            endIndex: "# Contributing",
            image: "assets/images/iot.png"
        },
        {
            owner: "ramnes",
            repo: "awesome-mongodb",
            languageStateName: "MongoDB",
            languageDisplayName: "MongoDB",
            startIndex: "## Resources",
            endIndex: "## License",
            image: "assets/images/iot.png"
        },
        {
            owner: "d3viant0ne",
            repo: "awesome-rethinkdb",
            languageStateName: "RethinkDB",
            languageDisplayName: "RethinkDB",
            startIndex: "RethinkDB Ecosystem",
            endIndex: "License",
            image: "assets/images/iot.png"
        },
        {
            owner: "onurakpolat",
            repo: "awesome-bigdata",
            languageStateName: "BigData",
            languageDisplayName: "Big Data",
            startIndex: "## RDBMS",
            endIndex: "# Other Awesome Lists",
            image: "assets/images/iot.png"
        },
        {
            owner: "youngwookim",
            repo: "awesome-hadoop",
            languageStateName: "Hadoop",
            languageDisplayName: "Hadoop",
            startIndex: "## Hadoop",
            endIndex: "# Other Awesome Lists",
            image: "assets/images/iot.png"
        },
        {
            owner: "tayllan",
            repo: "awesome-algorithms",
            languageStateName: "Algorithms",
            languageDisplayName: "Algorithms",
            startIndex: "## Websites",
            endIndex: "## License",
            image: "assets/images/iot.png"
        },
        {
            owner: "christian-bromann",
            repo: "awesome-selenium",
            languageStateName: "Selenium",
            languageDisplayName: "Selenium",
            startIndex: "### Tools",
            endIndex: "## License",
            image: "assets/images/iot.png"
        },
        {
            owner: "melvin0008",
            repo: "awesome-projects-boilerplates",
            languageStateName: "Boilerplates",
            languageDisplayName: "Boilerplates",
            startIndex: "## Android Development",
            endIndex: "# [Contributing]",
            image: "assets/images/iot.png"
        },
        {
            owner: "HQarroum",
            repo: "awesome-iot",
            languageStateName: "IOT",
            languageDisplayName: "Internet Of Things",
            startIndex: "### Hardware",
            endIndex: "## License",
            image: "assets/images/iot.png"
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