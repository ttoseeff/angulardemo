import { Component } from "@angular/core"

@Component({
    selector: 'my-emp',
    templateUrl: 'app/employee/employee.component.html',
    //styles: ["table {    color: #369;    font- family: Arial, Helvetica, sans-serif;font-size: large;border-collapse: collapse;}", "td {    border: 1px solid #000;}"]
    styleUrls:["app/employee/employee.component.css"]
})
export class EmployeeComponent{

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