import { Component } from '@angular/core';
import { ActivityLog } from '../models/activity-log.model';
import { ActivityType } from '../models/activity-type.enum';


@Component({
    selector: 'baby-log',
    templateUrl: './app/components/baby-log.component.html',
    styleUrls: ['./app/components/baby-log.component.css'],
})
export class BabyLogComponent {
    activities: ActivityLog[] = [
        { type: ActivityType.EAT, babyId: "1", babyName: "יוסי", remark: "מטרנה", date: new Date(), time:"07:30" },
        { type: ActivityType.EAT, babyId: "1", babyName: "יוסי", remark: "מטרנה", date: new Date(), time:"07:30" },
        { type: ActivityType.EAT, babyId: "1", babyName: "יוסי", remark: "מטרנה", date: new Date(), time:"07:30" },
        { type: ActivityType.EAT, babyId: "1", babyName: "יוסי", remark: "מטרנה", date: new Date(), time: "07:30" }
    ];

}