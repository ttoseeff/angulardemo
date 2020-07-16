"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TutorialComponent = (function () {
    function TutorialComponent() {
        this.myClasses = "colorClass italicsClass";
        this.applyitalicsClass = true;
        this.applyboldClass = true;
        this.isBold = true;
        this.fontSize = 30;
        this.isItalic = true;
    }
    TutorialComponent.prototype.addClasses = function () {
        var classes = {
            italicsClass: this.applyitalicsClass,
            boldClass: this.applyboldClass
        };
        return classes;
    };
    TutorialComponent.prototype.addStyles = function () {
        var styles = {
            'font-weight': this.isBold ? "bold" : "normal",
            'font-style': this.isItalic ? "italic" : "normal",
            'font-size.px': this.fontSize
        };
        return styles;
    };
    return TutorialComponent;
}());
TutorialComponent = __decorate([
    core_1.Component({
        selector: "tutorial-select",
        templateUrl: "app/tutorial/tutorial.component.html",
        styleUrls: ["app/tutorial/tutorial.component.css"]
    })
], TutorialComponent);
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map