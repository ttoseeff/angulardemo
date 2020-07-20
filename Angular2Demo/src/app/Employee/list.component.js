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
var EmployeeService_1 = require("./Service/EmployeeService");
var ColorPreferences_1 = require("./Service/ColorPreferences");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_employeeService, _colorPreferences) {
        this._employeeService = _employeeService;
        this._colorPreferences = _colorPreferences;
        this.ServiceError = "Loading.....";
        this.selectDropDownValue = "All";
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (data) { return _this.employees = data; }, function (error) {
            _this.ServiceError = "Problem with the server. please try again after some moments.";
            console.error(error);
        });
    };
    Object.defineProperty(EmployeeListComponent.prototype, "color", {
        get: function () {
            return this._colorPreferences.colorPreference;
        },
        set: function (value) {
            this._colorPreferences.colorPreference = value;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeListComponent.prototype.getEmployees = function () {
    };
    EmployeeListComponent.prototype.gettrackcode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent.prototype.getTotalEmployeeCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    EmployeeListComponent.prototype.GetRadioButtonValue = function (selectDropDownValue) {
        this.selectDropDownValue = selectDropDownValue;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: "list-emp",
        templateUrl: "./list.component.html",
        styleUrls: ["app/employee/list.component.css"],
        providers: [EmployeeService_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [EmployeeService_1.EmployeeService, ColorPreferences_1.ColorPreferences])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=list.component.js.map