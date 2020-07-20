import { Component } from "@angular/core"
import { ColorPreferences } from "../Service/ColorPreferences";

@Component({
    selector: "subcomp",
    template: "<h2>{{color}}</h2>"
})
export class EmpSubComponent {
    constructor(private _prefernece: ColorPreferences) {
        let color:string =_prefernece.colorPreference;
    }
}