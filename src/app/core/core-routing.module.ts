import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {path:"",loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule )},
  {path:"edu",component:MainLayoutComponent,
  children:[
    {path:"lessons",loadChildren: () => import('../lessons/lessons.module').then(m => m.LessonsModule)},
    
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
