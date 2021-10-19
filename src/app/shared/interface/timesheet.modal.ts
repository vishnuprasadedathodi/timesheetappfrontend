import { Time } from "@angular/common";

export interface ITimesheet {
    tid:number;
    id:number;
    name:string;
    date:Date;
    start_time:Time;
    end_time:Time;
    status:string;
}
