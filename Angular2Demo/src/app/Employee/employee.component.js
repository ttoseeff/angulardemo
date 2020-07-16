"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmployeeComponent = (function () {
    function EmployeeComponent() {
        this.name = "name";
        this.ngmodel = "ngmodel";
        this.firstname = "toseef";
        this.lastname = "ahmad";
        this.gender = "male";
        this.age = 22;
        this.showDetail = false;
    }
    EmployeeComponent.prototype.onClick = function () {
        console.log("button clicked");
    };
    EmployeeComponent.prototype.showDetails = function () {
        this.showDetail = !this.showDetail;
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'my-emp',
        templateUrl: 'app/employee/employee.component.html',
        //styles: ["table {    color: #369;    font- family: Arial, Helvetica, sans-serif;font-size: large;border-collapse: collapse;}", "td {    border: 1px solid #000;}"]
        styleUrls: ["app/employee/employee.component.css"]
    })
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map