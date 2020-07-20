import { Injectable } from "@angular/core"

@Injectable()
export class ColorPreferences {
    constructor() {
        console.log("constructor is called.");
    }
    colorPreference: string = "red";
}



