import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AddLessonComponent } from '../../add-lesson/add-lesson/add-lesson.component';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-list-lessons',
  templateUrl: './list-lessons.component.html',
  styleUrls: ['./list-lessons.component.scss']
})
export class ListLessonsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'lessonName', 'teacherName', 'studentName', 'hoursNumber', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  

  constructor(private api: ApiService,  private dialog: MatDialog,  private toast: NgToastService) { }

  ngOnInit(): void {
   this.getAllLesson();

}
getAllLesson(){
  this.api.getLesson().subscribe({
    next: (res)=>{
      this.dataSource= new MatTableDataSource(res);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.sort;
    },
    error:(err)=>{
      this.toast.error({detail:"Error Message", summary:"Error while fetching the lessons!!", duration:5000})
    }
  })
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
editeLesson(row: any){
  this.dialog.open(AddLessonComponent,{
    width:'30%',
    data: row
  }).afterClosed().subscribe(val=>{
    if(val==='update'){
      this.getAllLesson();
    }
  })
}
deleteLesson(id:number){
  this.api.deleteLesson(id).subscribe({
    next:(res)=>{
      this.toast.success({detail:"Success Message", summary:"data deleted successfully", duration:5000})
      this.getAllLesson();
    },
    error:()=>{
      
      this.toast.error({detail:"Error Message", summary:"error while deleting the data", duration:5000})
      

    }

  })
}
}