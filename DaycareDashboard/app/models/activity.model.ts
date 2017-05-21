import { ActivityType } from "./activity-type.enum";

export interface Activity {
    time: string;
    type: ActivityType;
    remark: string;
}