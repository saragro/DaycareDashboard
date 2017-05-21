import { ActivityType } from "./activity-type.enum";

export interface AvailableActivity {
    actType: ActivityType;
    isEnabled: boolean;
}