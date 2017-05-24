import { ActivityType } from "../../shared/index";

export interface Activity {
    time: string;
    type: ActivityType;
    remark: string;
}