import {Injectable} from '@angular/core'


@Injectable()
export class ReposService {
    private repos = [
        {owner: "sindresorhus", repo: "awesome", name: "Main Awesome Repo"},
        {owner: "gianarb", repo: "awesome-angularjs", name: "Angular"},
        {owner: "AngularClass", repo: "awesome-angular2", name: "Angular2"},
        {owner: "sadcitizen", repo: "awesome-backbone", name: "Backbone"},
        {owner: "dnbard", repo: "awesome-knockout", name: "Knockout"},
        {owner: "Urigo", repo: "awesome-meteor", name: "Meteor"},
        {owner: "nmec", repo: "awesome-ember", name: "Ember"},
        {owner: "behzad888", repo: "awesome-aurelia", name: "Aurelia"},
        {owner: "lauris", repo: "awesome-scala", name: "Scala"}
    ];

    getRepos() {
        return this.repos;
    }

    getRepo(id) {
        return this.repos;
    }
}