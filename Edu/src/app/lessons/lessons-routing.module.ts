import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLessonComponent } from './add-lesson/add-lesson/add-lesson.component';
import { ListLessonsComponent } from './list-lessons/list-lessons/list-lessons.component';



const routes: Routes = [
  {path:'', redirectTo:'list',pathMatch:'full'},
  {path:'list', component:ListLessonsComponent},
  {path:'add', component:AddLessonComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

  })
export class lessonsRoutingModule { }
