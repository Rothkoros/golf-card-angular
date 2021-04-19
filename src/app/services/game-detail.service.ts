import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class GameDetailService {

 
 data: any;

  constructor(private http: HttpClient) { }
  getCoursedetail(courseId): Observable<any>{
    return this.data = this.http.get<any>(`https://golf-courses-api.herokuapp.com/courses/${courseId}`)
    
  }

}
