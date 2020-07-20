import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component'
import { TutorialComponent } from './Tutorial/tutorial.component'
import { EmployeeListComponent } from './Employee/list.component'
import { EmployeeTitlePipe } from './Employee/employeeTitle.pipe'
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { SimpleComponent } from './simple/simple.component';
import { HomeComponent } from "./home/home.component"
import { PageNotFoundComponent } from "./error/PageNotFound.component"
import { EmployeeService } from "./Employee/Service/EmployeeService"
import { ColorPreferences } from './Employee/Service/ColorPreferences';

const appRoutes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "employees/:code/:name",
        component: EmployeeComponent
    },
    {
        path: "employees",  
        component: EmployeeListComponent
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch : "full"
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, EmployeeComponent, TutorialComponent, EmployeeListComponent,
        EmployeeTitlePipe, EmployeeCountComponent, SimpleComponent
        , HomeComponent, PageNotFoundComponent
    ],
    bootstrap: [AppComponent],
    providers: [EmployeeService]
})
export class AppModule { }
