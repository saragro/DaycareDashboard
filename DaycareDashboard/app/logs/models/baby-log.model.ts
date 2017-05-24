import { Activity } from "../index";

export interface BabyLog {
    babyId: string;
    babyName: string;
    date: Date;
    actsLog: Activity[];
}