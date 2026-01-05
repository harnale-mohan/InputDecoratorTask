import { Component } from "@angular/core";
import { movieArray } from "src/app/shared/constants/movie";
import { Imovies } from "src/app/shared/models/movie";


@Component({
    selector : 'app-parent',
    templateUrl : './movie-container.component.html',
    styleUrls : ['./movie-container.component.scss']
})
export class parentcomponent{

    movieArr : Array<Imovies> = movieArray;

}