import { Component } from "@angular/core";
import { natureCards } from "src/app/shared/constants/CradData";
import { Inature } from "src/app/shared/models/student";


@Component({
    selector : 'app-parent-naturecards',
    templateUrl : './parent.component.html',
    styleUrls : ['./parent.component.scss']
})

export class natureParentComponent {

  natureCardsArr : Array<Inature> = natureCards
}