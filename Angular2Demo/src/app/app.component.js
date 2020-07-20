"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ColorPreferences_1 = require("./Employee/Service/ColorPreferences");
var AppComponent = (function () {
    function AppComponent() {
        this.name = "angular! this is me, Toseef Ahmad";
        this.pageHeader = "Employee Details";
        this.isdisabled = false;
        this.firstname = "Toseef";
        this.lastname = "Ahmad";
        this.imagePath = "http://studyabroad.pk/UserEnd/Design/images/logo.png";
        this.EnteredValue = "Toseef";
    }
    AppComponent.prototype.getFullName = function () {
        return this.firstname + this.lastname;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        providers: [ColorPreferences_1.ColorPreferences]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map