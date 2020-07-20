import { Component, OnInit } from "@angular/core"
import { EmployeeService } from "./Service/EmployeeService"
import { ActivatedRoute } from "@angular/router"
import { IEmployee } from "./IEmployee";

@Component({
    selector: 'my-emp',
    templateUrl: 'app/employee/employee.component.html',
    //styles: ["table {    color: #369;    font- family: Arial, Helvetica, sans-serif;font-size: large;border-collapse: collapse;}", "td {    border: 1px solid #000;}"]
    styleUrls: ["app/employee/employee.component.css"]
})
export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string="Loading.. Please wait..";
    constructor(private _EmployeeService: EmployeeService, private _activatedRoute: ActivatedRoute) {

    }
    ngOnInit(): void {
        let code: string = this._activatedRoute.snapshot.params['code'];
        let name: string = this._activatedRoute.snapshot.params['name'];
        let show: string = "code:" + code + " name:" + name;

        this._EmployeeService.getEmployeesByCode(code).subscribe(
            (data) => {
                if (data == null) {
                    this.statusMessage = "Nothing to display";
                }
                else {
                    debugger;
                    this.employee = data;
                    alert(this.employee.code)
                }
            },
            (error) => {
                this.statusMessage = "some problem with the service."
            }
        );
    }






    name: string = "name";
    ngmodel: string = "ngmodel";
    firstname: string = "toseef";
    lastname: string = "ahmad";
    gender: string = "male";
    age: number = 22;
    showDetail: boolean = false;

    onClick(): void {
        console.log("button clicked");
    }
    showDetails(): void {
        this.showDetail = !this.showDetail;
    }
}