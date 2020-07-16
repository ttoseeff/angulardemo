import { Injectable  } from "@angular/core"
import { IEmployee } from "./../IEmployee";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
import "rxjs/add/observable/throw"


@Injectable()
export class EmployeeService {

    constructor(private _http: Http) { }

    employees:  Observable<IEmployee[]>;
    getEmployees(): Observable<IEmployee[]>{
        return this.employees = this._http.get("http://localhost:64933/api/employee")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.CatchError);
    }

    CatchError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}