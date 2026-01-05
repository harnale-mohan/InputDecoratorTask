import { Component, Input } from "@angular/core";
import { Ispace } from "src/app/shared/models/student";


@Component({
    selector : 'app-child-spaceCards',
    templateUrl : './child.component.html',
    styleUrls : ['./child.component.scss']
})

export class spaceChildComponent {

    @Input() spaceCards !: Ispace;

    
}