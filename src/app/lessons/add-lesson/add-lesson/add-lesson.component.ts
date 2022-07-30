import { Component, OnInit } from '@angular/core';
import  {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss']
})
export class AddLessonComponent implements OnInit {
  lessonsForm !: FormGroup;
  actionbtn: string= 'save';

  constructor(private formBuilder: FormBuilder,
     private api: ApiService,
     @Inject(MAT_DIALOG_DATA) public editData: any, 
    private dialogRef: MatDialogRef<AddLessonComponent>,
    private toast: NgToastService) { }

  ngOnInit(): void {
    this.lessonsForm= this.formBuilder.group({
      lessonName : ['', Validators.required],
      teacherName : ['', Validators.required],
      studentName : ['', Validators.required],
      hoursNumber : ['', Validators.required]
    })
    if(this.editData){
      this.actionbtn= 'Update';
      this.lessonsForm.controls['lessonName'].setValue(this.editData.lessonName);
      this.lessonsForm.controls['teacherName'].setValue(this.editData.teacherName);
      this.lessonsForm.controls['studentName'].setValue(this.editData.studentName);
      this.lessonsForm.controls['hoursNumber'].setValue(this.editData.hoursNumber);
    }
  }
  addLesson(){
    if(!this.editData){
      if(this.lessonsForm.valid){
        this.api.postLesson(this.lessonsForm.value).subscribe({
          next:(res)=>{
            this.toast.success({detail:"Success Message", summary:"lesson adedd successfully", duration:5000})
            this.lessonsForm.reset();
            this.dialogRef.close();
          },
          error:()=>{

            this.toast.error({detail:"Error Message", summary:"Error while adding lesson", duration:5000})
            
          }
        })
      }
    }else{
      this.updateLesson()
    }
  }
  updateLesson(){
    this.api.putLesson(this.lessonsForm.value,this.editData.id).subscribe({
      next:(res)=>{
        
        this.toast.success({detail:"Success Message", summary:"login Data update seccessfully!!", duration:5000})
        this.lessonsForm.reset();
        this.dialogRef.close("update");

      },
      error:()=>{
        this.toast.error({detail:"Error Message", summary:"Error while updatting lesson", duration:5000})
        
      }
    })
    
  }

}
