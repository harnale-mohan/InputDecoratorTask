import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector : 'app-output-child',
    templateUrl : './child-component.html',
    styleUrls : ['./child-component.scss']
})

export class outputChildComponent{

    @Output() notify = new EventEmitter<string>();

    sendData(){
        this.notify.emit('Hello Parent')
    }
}