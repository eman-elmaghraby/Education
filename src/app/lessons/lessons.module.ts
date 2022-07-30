import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListLessonsComponent } from './list-lessons/list-lessons/list-lessons.component';
import { AddLessonComponent } from './add-lesson/add-lesson/add-lesson.component';
import { LayoutLessonsComponent } from './layout-lessons/layout-lessons/layout-lessons.component';
import { lessonsRoutingModule } from './lessons-routing.module';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    ListLessonsComponent,
    AddLessonComponent,
    LayoutLessonsComponent,
    
    
    
  ],
  bootstrap: [ListLessonsComponent],
  imports: [
    CommonModule,
    lessonsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
      
    
  
  
  ]
})
export class LessonsModule { }
