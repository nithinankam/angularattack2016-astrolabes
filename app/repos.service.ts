import {Injectable} from '@angular/core'


@Injectable()
export class ReposService {
    private repos = [
        {owner: "diegocard", repo: "awesome-html5", name: "HTML5"},
        {owner: "sotayamashita", repo: "awesome-css", name: "CSS"},
        {owner: "AngularClass", repo: "awesome-angular2", name: "JavaScript"},
        {owner: "aleksandar-todorovic", repo: "awesome-c", name: "C"},
        {owner: "fffaraz", repo: "awesome-cpp", name: "C/C++"},
        {owner: "akullpp", repo: "awesome-java", name: "Java"},
        {owner: "markets", repo: "awesome-ruby", name: "Ruby"},
        {owner: "dzharii", repo: "awesome-typescript", name: "TypeScript"},
        {owner: "peterkokot", repo: "awesome-jquery", name: "JQuery"},
        {owner: "vinta", repo: "awesome-python", name: "Python"},
        {owner: "lauris", repo: "awesome-scala", name: "Scala"},
        {owner: "kdabir", repo: "awesome-groovy", name: "Groovy"},
        {owner: "AngularClass", repo: "awesome-angular2", name: "Angular2"},
        {owner: "gianarb", repo: "awesome-angularjs", name: "Angular"},
        {owner: "enaqx", repo: "awesome-react", name: "React"},
        {owner: "sadcitizen", repo: "awesome-backbone", name: "Backbone"},
        {owner: "Urigo", repo: "awesome-meteor", name: "Meteor"},
        {owner: "nmec", repo: "awesome-ember", name: "Ember"},
        {owner: "wasabeef", repo: "awesome-android-ui", name: "Android-UI"},
        {owner: "cjwirth", repo: "awesome-ios-ui", name: "iOS UI"},
        {owner: "candelibas", repo: "awesome-ionic2", name: "Ionic2"},
        {owner: "willianjusten", repo: "awesome-svg", name: "SVG"},
        {owner: "raphamorim", repo: "awesome-canvas", name: "Canvas"},
        {owner: "wbkd", repo: "awesome-d3", name: "D3"},
        {owner: "veggiemonk", repo: "awesome-docker", name: "Docker"},
        {owner: "ekremkaraca", repo: "awesome-rails", name: "Rails"},
        {owner: "fcambus", repo: "nginx-resources", name: "nginx"},
        {owner: "shlomi-noach", repo: "awesome-mysql", name: "MySQL"},
        {owner: "ramnes", repo: "awesome-mongodb", name: "MongoDB"},
        {owner: "d3viant0ne", repo: "awesome-rethinkdb", name: "RethinkDB"},
        {owner: "onurakpolat", repo: "awesome-bigdata", name: "BigData"},
        {owner: "youngwookim", repo: "awesome-hadoop", name: "Hadoop"},
        {owner: "tayllan", repo: "awesome-algorithms", name: "Algorithms"},
        {owner: "christian-bromann", repo: "awesome-selenium", name: "Selenium"},
        {owner: "melvin0008", repo: "awesome-projects-boilerplates", name: "Boilerplates"},
        {owner: "HQarroum", repo: "awesome-iot", name: "IOT"}
    ];

    getRepos() {
        return this.repos;
    }

    getRepo(name) {
        var result = this.repos.filter(function (obj) {
            return obj.name == name;
        });
        return result;
    }
}