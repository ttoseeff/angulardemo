import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component'
import { TutorialComponent } from './Tutorial/tutorial.component'
import { EmployeeListComponent } from './Employee/list.component'
import { EmployeeTitlePipe } from './Employee/employeeTitle.pipe'
import { EmployeeCountComponent } from './employee/employeeCount.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, TutorialComponent, EmployeeListComponent,
        EmployeeTitlePipe, EmployeeCountComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
