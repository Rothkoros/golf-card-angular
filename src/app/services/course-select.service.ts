import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../interfaces/courses';


@Injectable({
  providedIn: 'root'
})
export class CourseSelectService {

  constructor(private http: HttpClient) { }

  courses: Course[]






}
