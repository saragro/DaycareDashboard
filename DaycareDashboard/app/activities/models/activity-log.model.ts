import { ActivityType } from "../../shared/index";

export interface ActivityLog {
    type: ActivityType;
    babyId: string;
    babyName: string;
    remark: string;
    date: Date;
    time: string;
}