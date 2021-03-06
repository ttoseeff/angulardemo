import { Component, ChangeDetectorRef } from "@angular/core";
import { ColorPreferences } from "./Employee/Service/ColorPreferences";


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [ColorPreferences]
})

export class AppComponent {
    name: string = "angular! this is me, Toseef Ahmad"
    pageHeader: string = "Employee Details"
    isdisabled: boolean = false;

    firstname: string = "Toseef";
    lastname: string = "Ahmad";
    imagePath: string = "http://studyabroad.pk/UserEnd/Design/images/logo.png";
    getFullName(): string {
        return this.firstname + this.lastname;
    }
    EnteredValue: string = "Toseef";
}