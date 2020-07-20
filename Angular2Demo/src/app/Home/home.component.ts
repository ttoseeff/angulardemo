import { Component } from "@angular/core"
import { ColorPreferences } from "../Employee/Service/ColorPreferences";

@Component({
    template: `<h2>Welcome to Home Page</h2>
               <input type="text" [(ngModel)]="color" [style.background]="color" />
`

})
export class HomeComponent {
    constructor(private _colorPreferences: ColorPreferences) {

    }
    get color(): string {
        return this._colorPreferences.colorPreference;
    }

    set color(value: string) {
        this._colorPreferences.colorPreference = value;
    }

}