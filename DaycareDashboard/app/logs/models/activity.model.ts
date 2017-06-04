import { ActivityType } from "../../shared/index";

export interface Activity {
	actId: number;
    time: string;
    type: ActivityType;
    remark: string;
}