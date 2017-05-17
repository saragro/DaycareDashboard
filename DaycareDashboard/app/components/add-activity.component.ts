import { Component } from '@angular/core';
import { ActivityLog } from '../models/activity-log.model';
import { ActivityType } from '../models/activity-type.enum';
import { Baby } from '../models/baby.model';
import { ButtonModule } from 'primeng/primeng';


@Component({
    selector: 'add-activity',
    templateUrl: './app/components/add-activity.component.html',
    //styleUrls: ['./app/components/add-activity.component.css'],
})
export class AddActivityComponent {
    babies: Baby[] = [
        { id: "123", name: "Ari", birthDate: new Date(), nannyId: "111", parentId1: "11111", parentId2:"2222" },
        //{ id: "324", name: "אבי", birthDate: new Date(), nannyId: "111", parentId1: "33333", parentId2: "44444" },
    ];
    selectedBaby: Baby;

    eat(id: string) {
        console.log(id);
    }

}