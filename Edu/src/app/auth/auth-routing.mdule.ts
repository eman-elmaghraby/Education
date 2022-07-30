import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLessonsComponent } from '../lessons/list-lessons/list-lessons/list-lessons.component';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'lessons', component:ListLessonsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
