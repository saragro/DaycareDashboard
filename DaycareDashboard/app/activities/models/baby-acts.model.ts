import { AvailableActivity } from "./available-acts.model";
import { ActivityType } from "../index";

export interface BabyActs {
    id: string;
    name: string;
    avialbleActivities :AvailableActivity[]
    lastActivity : ActivityType
}