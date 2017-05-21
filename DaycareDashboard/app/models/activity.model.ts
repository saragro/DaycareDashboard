import { ActivityType } from "./activity-type.enum";

export interface Activity {
    type: ActivityType;   
    remark: string;
    date: Date;
    time: string;
}