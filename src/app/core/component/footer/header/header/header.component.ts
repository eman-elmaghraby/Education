import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AddLessonComponent } from 'src/app/lessons/add-lesson/add-lesson/add-lesson.component';
import { ListLessonsComponent } from 'src/app/lessons/list-lessons/list-lessons/list-lessons.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ListLessonsComponent],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog, private allLesson: ListLessonsComponent) { }
  onLogout(){
    this.router.navigateByUrl('/login');
  }

  openDialog() {
    this.dialog.open(AddLessonComponent,{
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.allLesson.getAllLesson();
      }
    })
  }

  ngOnInit(): void {
  }

}
