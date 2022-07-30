import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListLessonsComponent } from 'src/app/lessons/list-lessons/list-lessons/list-lessons.component';
import {FormBuilder,FormGroup} from '@angular/forms';
import  {HttpClient}   from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  
listLessons= ListLessonsComponent;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private toast: NgToastService) { }
  
   

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      email:[''],
      password:['']
    })
    
  }
 
    
  


  login(loginForm:any) {
    console.log('submitted',loginForm);
    this.listLessons= ListLessonsComponent;
   
    this.http.get<any>('http://localhost:3000/login').subscribe(res=>{
      const user= res.find((a:any)=>{
        return a.email=== this.loginForm.value.email && a.password=== this.loginForm.value.password
      });
      if(user){
        
        this.toast.success({detail:"Success Message", summary:"login success!!", duration:5000})
        this.loginForm.reset();
        this.router.navigateByUrl('edu/lessons/list');
      }else{
        this.toast.error({detail:"Error Message", summary:"login feild, try again later!!", duration:5000})
      }
    })
}
      
    
    

}

