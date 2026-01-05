import { Component } from "@angular/core";
import { techCards } from "src/app/shared/constants/CradData";
import { Icards } from "src/app/shared/models/student";




@Component({
    selector : 'app-parent-techcards',
    templateUrl : './parent.component.html',
    styleUrls : ['./parent.component.scss']
})

export class techParentComponent {

  techCardsArr : Array<Icards> = techCards
}