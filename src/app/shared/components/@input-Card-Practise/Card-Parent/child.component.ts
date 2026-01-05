import { Component, Input} from '@angular/core'
import { Icards } from 'src/app/shared/models/student';



@Component({
    selector : 'app-child-techcards',
    templateUrl : './child.component.html',
    styleUrls : ['./child.component.scss']
})

export class techChildComponent {

    @Input() getTechCards !: Icards;

    
}