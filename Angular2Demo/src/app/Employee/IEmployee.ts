export class IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth?: string;
}

export class Employee implements IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
}