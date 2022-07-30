import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListLessonsComponent } from './list-lessons/list-lessons/list-lessons.component';
import { AddLessonComponent } from './add-lesson/add-lesson/add-lesson.component';
import { LayoutLessonsComponent } from './layout-lessons/layout-lessons/layout-lessons.component';
import { lessonsRoutingModule } from './lessons-routing.module';



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
  
  ]
})
export class LessonsModule { }
