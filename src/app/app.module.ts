import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatSnackBarModule} from '@angular/material/snack-bar'
import { MatIconModule } from '@angular/material/icon'


import { parentcomponent } from './shared/components/movies/movie-container/movie-container.component';
import { childComponent } from './shared/components/movies/movie.card/movie-card.component';
import { studentComponent } from './shared/components/CRUD/student.component';
import { crudComponent } from './shared/components/Todo&Student-CRUD-Test/crud-test';
import { outputChildComponent } from './shared/components/outputD-1/child/child.component';
import { outputParentComponent } from './shared/components/outputD-1/parent/parent-component';
import { techChildComponent } from './shared/components/@input-Card-Practise/Card-Parent/child.component';
import { techParentComponent } from './shared/components/@input-Card-Practise/Card-Child/parent.component';
import { natureChildComponent } from './shared/components/@input-Card-Practise/NatureCards/nature-child/child.component';
import { natureParentComponent } from './shared/components/@input-Card-Practise/NatureCards/nature-parent/parent.component';
import { spaceParentComponent } from './shared/components/@input-Card-Practise/spacecards/space-parent/parent.component';
import { spaceChildComponent } from './shared/components/@input-Card-Practise/spacecards/space-child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    parentcomponent,
    childComponent,
    studentComponent,
    crudComponent,
    outputChildComponent,
    outputParentComponent,
    techChildComponent,
    techParentComponent,
    natureChildComponent,
    natureParentComponent,
    spaceParentComponent,
    spaceChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
