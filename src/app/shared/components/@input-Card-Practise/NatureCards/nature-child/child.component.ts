import { Component, Input } from "@angular/core";
import { Inature } from "src/app/shared/models/student";

@Component({
    selector : 'app-child-natureCards',
    templateUrl : './child.component.html',
    styleUrls : ['./child.component.scss']
})

export class natureChildComponent {

    @Input() natureCards !: Inature;

    
}