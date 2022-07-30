import { Injectable } from '@angular/core';
import  {HttpClient}   from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postLesson(data: any){
    return this.http.post<any>("http://localhost:3000/lessonList/",data);
  }
  getLesson(){
    return this.http.get<any>("http://localhost:3000/lessonList/");
  }
  putLesson(data:any, id: number){
    return this.http.put<any>("http://localhost:3000/lessonList/"+id, data)
  }
  deleteLesson(id:number){
    return this.http.delete<any>("http://localhost:3000/lessonList/"+id)
  }
}
