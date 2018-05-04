//import { DatePicker } from "angular2-datetimepicker/datepicker.component";

export class Nationality
{
    country:string;
    total_crew:number;
}

export class Port
{
    name:string;
    date: Date;
}


export class VoyageData{
    startPort:string;
    startDate:Date;
    endPort:string;
    endDate:Date;
    portsOnRoute:Port[];
}