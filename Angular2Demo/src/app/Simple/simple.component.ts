﻿import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'

@Component({
    selector: "simple",
    templateUrl:"app/simple/simple.component.html"
})
export class SimpleComponent implements OnChanges {
    @Input()
    valueInput: string;

    ngOnChanges(changes: SimpleChanges): void {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ': currentValue = '
                + current + ', previousValue = ' + previous);
            // The above line can be rewritten using
            // placeholder syntax as shown below
            // console.log(`${propertyName}: currentValue
            // = ${current }, previousValue = ${previous }`);
        }
    }

}