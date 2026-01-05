import { Component, ElementRef, ViewChild } from "@angular/core";
import { Istudent, Itodo } from "../../models/student";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
    selector: 'app-crud-test',
    templateUrl: './crud-test.html',
    styleUrls: ['./crud-test.scss']
})


export class crudComponent {

    studentArr: Array<Istudent> = [
        {
            fname: 'jhon',
            lname: 'doe',
            email: 'jhon@gmail.com',
            contact: '987654321',
            id: '123'
        },
        {
            fname: 'may',
            lname: 'das',
            email: 'may@gmail.com',
            contact: '888888888',
            id: '124'
        }
    ]

    todoArr: Array<Itodo> = [
        {
            name: "soham",
            id: "123"
        },

        {
            name: "rohan",
            id: "123"
        }
    ]

    constructor(private _snackBar: MatSnackBar) { }
    isEditMode: boolean = false;
    @ViewChild('todo') todo !: ElementRef
    editId !: string

    trackById(index: number, s: Istudent) {
        return s.id
    }

    onAdd() {
        let todoObj: Itodo = {
            name: this.todo.nativeElement.value,
            id: Date.now().toString()
        }
        this.todo.nativeElement.value = ''
        this.todoArr.push(todoObj);
        this._snackBar.open(`The New Student name with id ${todoObj.id} is Created Successfully.`,
            'Close', {
            horizontalPosition: 'left',
            verticalPosition: 'top',
            duration: 3000
        })
    }


    onRemove(id: string) {
        let getIndex = this.todoArr.findIndex(t => t.id == id)
        this.todoArr.splice(getIndex, 1)
        this._snackBar.open(`The Student  With id ${id} is Removed Successfully.`,
            'Close', {
            horizontalPosition: 'left',
            verticalPosition: 'top',
            duration: 3000
        })
    }

    onEdit(s: Itodo) {
        this.todo.nativeElement.value = s.name;
        this.editId = s.id
        this.isEditMode = true;
    }

    onUpdate() {
        let UPDATED_OBJ: Itodo = {
            name: this.todo.nativeElement.value,
            id: this.editId
        }
        this.todo.nativeElement.value = ''
        this.isEditMode = false;

        let getIndex = this.todoArr.findIndex(t => t.id == UPDATED_OBJ.id);
        this.todoArr[getIndex] = UPDATED_OBJ;
        this._snackBar.open(`The Student  with id ${UPDATED_OBJ.id} is Updated Successfully`,
            'Close', {
            horizontalPosition: 'left',
            verticalPosition: 'top',
            duration: 3000
        })
    }



}