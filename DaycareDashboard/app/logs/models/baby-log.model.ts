import { Activity, Baby } from "../index";

export interface BabyLog {
    baby: Baby;
    date: Date;
    actsLog: Activity[];
}