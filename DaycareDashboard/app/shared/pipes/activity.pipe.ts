import { Pipe, PipeTransform } from "@angular/core";
import { ActivityType } from "../index";
@Pipe({
    name: 'actPipe'
})

export class ActivityPipe implements PipeTransform {
    transform(activtyTypeId: number): string {
        switch (activtyTypeId)
        {
            case ActivityType.GO_HOME:
                return "Go Home";
            case ActivityType.ARRIVE:
                return "Arrive";
            case ActivityType.EAT:
                return "Eat";
            case ActivityType.SLEEP:
                return "Sleep";
            case ActivityType.WAKE_UP:
                return "Wake Up";
            case ActivityType.CHANGED:
                return "Change";
        }
        return ActivityType[activtyTypeId];
    }
}