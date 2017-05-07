import { ActivityType } from "./activity-type.enum";

export interface ActivityLog {
    type: ActivityType;
    babyId: string;
    babyName: string;
    remark: string;
    date: Date;
    time: string;
}