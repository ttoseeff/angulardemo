"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./Employee/employee.component");
var tutorial_component_1 = require("./Tutorial/tutorial.component");
var list_component_1 = require("./Employee/list.component");
var employeeTitle_pipe_1 = require("./Employee/employeeTitle.pipe");
var employeeCount_component_1 = require("./employee/employeeCount.component");
var simple_component_1 = require("./simple/simple.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, tutorial_component_1.TutorialComponent, list_component_1.EmployeeListComponent,
            employeeTitle_pipe_1.EmployeeTitlePipe, employeeCount_component_1.EmployeeCountComponent, simple_component_1.SimpleComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map