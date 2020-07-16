import { Component } from "@angular/core"

@Component({
    selector: "tutorial-select",
    templateUrl: "app/tutorial/tutorial.component.html",
    styleUrls: ["app/tutorial/tutorial.component.css"]
})
export class TutorialComponent {
    myClasses: string = "colorClass italicsClass";
    applyitalicsClass: boolean = true;
    applyboldClass: boolean = true;

    addClasses() {
        let classes = {
            italicsClass: this.applyitalicsClass,
            boldClass: this.applyboldClass
        };
        return classes;
    }
    isBold: boolean = true;
    fontSize: number = 30;
    isItalic: boolean = true;

    addStyles() {
        let styles = {
            'font-weight': this.isBold ? "bold" : "normal",
            'font-style': this.isItalic ? "italic" : "normal",
            'font-size.px': this.fontSize
        }
        return styles;
    }

}