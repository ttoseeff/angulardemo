import { Component } from "@angular/core"

@Component({
    selector: "list-emp",
    templateUrl: "app/employee/list.component.html",
    styleUrls: ["app/employee/list.component.css"]
})
export class EmployeeListComponent {
    employees: any[];
    selectDropDownValue: string="All";
    constructor() {
        this.employees = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '02/6/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '10/10/1980'
            },
          
        ];
    }
    getEmployees(): void {
        this.employees = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '02/6/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '10/10/1980'
            },
            {
                code: 'emp105', name: 'Nancy', gender: 'Female',
                annualSalary: 6700.826, dateOfBirth: '12/15/1982'
            },
        ];
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