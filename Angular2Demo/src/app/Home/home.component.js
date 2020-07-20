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
var core_1 = require("@angular/core");
var ColorPreferences_1 = require("../Employee/Service/ColorPreferences");
var HomeComponent = (function () {
    function HomeComponent(_colorPreferences) {
        this._colorPreferences = _colorPreferences;
    }
    Object.defineProperty(HomeComponent.prototype, "color", {
        get: function () {
            return this._colorPreferences.colorPreference;
        },
        set: function (value) {
            this._colorPreferences.colorPreference = value;
        },
        enumerable: true,
        configurable: true
    });
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        template: "<h2>Welcome to Home Page</h2>\n               <input type=\"text\" [(ngModel)]=\"color\" [style.background]=\"color\" />\n"
    }),
    __metadata("design:paramtypes", [ColorPreferences_1.ColorPreferences])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map