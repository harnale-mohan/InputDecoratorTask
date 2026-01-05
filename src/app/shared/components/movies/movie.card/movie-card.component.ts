import { Component, Input } from "@angular/core";
import { Imovies } from "src/app/shared/models/movie";



@Component({
    selector : 'app-child',
    templateUrl : './movie-card.component.html',
    styleUrls : ['./movie-card.component.scss']
})

export class childComponent{

    @Input() movies !: Imovies
}