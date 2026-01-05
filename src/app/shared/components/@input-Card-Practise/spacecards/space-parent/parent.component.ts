import { Component } from "@angular/core";
import { spaceCards } from "src/app/shared/constants/CradData";
import { Ispace } from "src/app/shared/models/student";


@Component({
    selector : 'app-parent-spacecards',
    templateUrl : './parent.component.html',
    styleUrls : ['./parent.component.scss']
})

export class spaceParentComponent {

  spaceCardsArr : Array<Ispace> = spaceCards
}