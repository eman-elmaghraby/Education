import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListLessonsComponent } from 'src/app/lessons/list-lessons/list-lessons/list-lessons.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
listLessons= ListLessonsComponent;
  constructor(private router: Router) { }
  
   

  ngOnInit(): void {
    
  }
 
    
  


  onSubmit(loginForm:any) {
    console.log('submitted',loginForm);
    this.listLessons= ListLessonsComponent;
    this.router.navigateByUrl('edu/lessons/list');
  }

}
