import { Component, ElementRef, ViewChild } from "@angular/core";
import { Istudent } from "../../models/student";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
})

export class studentComponent {

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

    constructor(private _snackBar: MatSnackBar) { }
    isInEditMode: boolean = false;
    editId !: string;

    trackById(index: number, s: Istudent) {
        return s.id
    }

    @ViewChild('fname')
    fname !: ElementRef

    @ViewChild('lname')
    lname !: ElementRef

    @ViewChild('email')
    email !: ElementRef

    @ViewChild('contact')
    contact !: ElementRef

    onAdd(): void {
        if (this.fname.nativeElement.value.trim() != '') {
            let studentObj: Istudent = {
                fname: this.fname.nativeElement.value,
                lname: this.lname.nativeElement.value,
                email: this.email.nativeElement.value,
                contact: this.contact.nativeElement.value,
                id: Date.now().toString()
            }
            this.fname.nativeElement.value = '';
            this.lname.nativeElement.value = '';
            this.email.nativeElement.value = '';
            this.contact.nativeElement.value = '';

            this.studentArr.push(studentObj)
            this._snackBar.open(`The New Student Data with id ${studentObj.id} is Created Successfully.`,
                'Close', {
                horizontalPosition: 'left',
                verticalPosition: 'top',
                duration: 3000
            })
        }
    }



    onRemove(id: string): void {
        let getIndex = this.studentArr.findIndex(f => f.id === id);
        this.studentArr.splice(getIndex, 1);
        this._snackBar.open(`The Student data With id ${id} is Removed Successfully.`,
            'Close', {
            horizontalPosition: 'left',
            verticalPosition: 'top',
            duration: 3000
        })
    }

    onEdit(s: Istudent): void {
        this.fname.nativeElement.value = s.fname;
        this.lname.nativeElement.value = s.lname;
        this.email.nativeElement.value = s.email;
        this.contact.nativeElement.value = s.contact;
        this.editId = s.id;

        this.isInEditMode = true;
    }

    onUpdate(): void {
        let UPDATED_OBJ: Istudent = {
            fname: this.fname.nativeElement.value,
            lname: this.lname.nativeElement.value,
            email: this.email.nativeElement.value,
            contact: this.contact.nativeElement.value,
            id: this.editId
        }

        this.fname.nativeElement.value = '';
        this.lname.nativeElement.value = '';
        this.email.nativeElement.value = '';
        this.contact.nativeElement.value = '';

        let getIndex = this.studentArr.findIndex(f => f.id === UPDATED_OBJ.id);
        this.studentArr[getIndex] = UPDATED_OBJ;
        this.isInEditMode = false;
        this._snackBar.open(`The Student Data with id ${UPDATED_OBJ.id} is Updated Successfully`,
            'Close', {
            horizontalPosition: 'left',
            verticalPosition: 'top',
            duration: 3000
        }
        )
    }



    // 2ndCRUD

    inEditMode : boolean = false;
    editId1 !: string

    @ViewChild('fname1')
    fname1 !: ElementRef

    @ViewChild('lname1')
    lname1 !: ElementRef

    @ViewChild('email1')
    email1 !: ElementRef

    @ViewChild('contact1')
    contact1 !: ElementRef

    onAdd1(){
        if(this.fname1.nativeElement.value.trim() != ''){
            let newObj : Istudent ={
                fname : this.fname1.nativeElement.value,
                lname : this.lname1.nativeElement.value,
                email : this.email1.nativeElement.value,
                contact : this.contact1.nativeElement.value,
                id : Date.now().toString()
            }
            this.fname1.nativeElement.value = '';
            this.lname1.nativeElement.value = '';
            this.email1.nativeElement.value = '';
            this.contact1.nativeElement.value = '';
        
         this.studentArr.push(newObj);
         this._snackBar.open(`The student with id${newObj.id} is created successfully.`,
            'Close',{
            horizontalPosition : 'left',
            verticalPosition : 'top',
            duration : 3000
            }
         )}
    }

    onDelete(id : string) : void{
        let getIndex = this.studentArr.findIndex(s => s.id == id);
        this.studentArr.splice(getIndex,1)
        this._snackBar.open(`the new student with id${id} is deleted successfully.`,
            'Close',{
                horizontalPosition : 'left',
                verticalPosition : 'top',
                duration : 3000
            })
    }

    onEdit1(s : Istudent) : void{
        this.fname1.nativeElement.value = s.fname;
        this.lname1.nativeElement.value = s.lname;
        this.email1.nativeElement.value = s.email;
        this.contact1.nativeElement.value = s.contact;
        this.editId1 = s.id;
        this.inEditMode = true;
    }

    onUpdate1(): void{
        let UPDATED_OBJ1 : Istudent = {
            fname : this.fname1.nativeElement.value,
            lname : this.lname1.nativeElement.value,
            email : this.email1.nativeElement.value,
            contact: this.contact1.nativeElement.value,
            id : this.editId1
        }
            this.fname1.nativeElement.value = '';
            this.lname1.nativeElement.value = '';
            this.email1.nativeElement.value = '';
            this.contact1.nativeElement.value = '';
            this.inEditMode = false;
        let findIndex = this.studentArr.findIndex(s => s.id == UPDATED_OBJ1.id);
        this.studentArr[findIndex] = UPDATED_OBJ1;
        this._snackBar.open(`The student with id${UPDATED_OBJ1.id} is Updated sccessfully.`,
            'Close',{
                horizontalPosition : 'left',
                verticalPosition : 'top',
                duration : 3000
            }
        )
    }
    
    

}