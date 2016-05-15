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
var repos_service_1 = require('./repos.service');
var sideNavbar_component_1 = require('./sideNavbar.component');
var NavBarComponent = (function () {
    function NavBarComponent(_reposService) {
        this._reposService = _reposService;
        this.defaultToggle = true;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.repos = this._reposService.getRepos();
    };
    NavBarComponent.prototype.onToggleClick = function () {
        this.defaultToggle = !this.defaultToggle;
    };
    NavBarComponent.prototype.myToggleNavBarChanges = function ($event) {
        this.defaultToggle = $event.value;
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            templateUrl: 'app/navbar.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, sideNavbar_component_1.sideNavBarComponent],
            styleUrls: ['app/navbar.component.css'],
            providers: [repos_service_1.ReposService]
        }), 
        __metadata('design:paramtypes', [repos_service_1.ReposService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map