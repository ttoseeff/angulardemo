import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeeCount.component.css']
})
export class EmployeeCountComponent {
    @Input()
    all: number;
    @Input()
    male: number;
    @Input()
    female: number;

    selectDropDownValue: string = "All";

    @Output()
    EventEmitterCall: EventEmitter<string> = new EventEmitter<string>();

    myvalue: string = "adsf";
    onselectDropDownValue() {
        this.EventEmitterCall.emit(this.selectDropDownValue);
    }
}