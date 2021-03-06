﻿import { Component,OnInit } from "@angular/core"
import { IEmployee } from "./IEmployee";
import { EmployeeService } from "./Service/EmployeeService"
import { Observable } from "rxjs/Observable";
import { ColorPreferences } from "./Service/ColorPreferences";

@Component({
    selector: "list-emp",
    templateUrl: "./list.component.html",
    styleUrls: ["app/employee/list.component.css"],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    ServiceError: string = "Loading.....";
    selectDropDownValue: string = "All";
    constructor(private _employeeService: EmployeeService, private _colorPreferences: ColorPreferences) { }
    ngOnInit(): void {
        this._employeeService.getEmployees()
            .subscribe(data => this.employees = data, (error) => {
                this.ServiceError = "Problem with the server. please try again after some moments.";
                console.error(error);
            });
    }
    get color(): string {
        return this._colorPreferences.colorPreference;
    }

    set color(value:string) {
        this._colorPreferences.colorPreference = value;
    }

    getEmployees(): void {
        
    }
    gettrackcode(index: number, employee: any): string {
        return employee.code;
    }

    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e=>e.gender==='Male').length;
    }

    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    GetRadioButtonValue(selectDropDownValue:string) {
        this.selectDropDownValue = selectDropDownValue;
    }
}