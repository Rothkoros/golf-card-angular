import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Course} from '../../interfaces/courses';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-course-select',
  templateUrl: './course-select.component.html',
  styleUrls: ['./course-select.component.scss']
})
export class CourseSelectComponent implements OnInit {

  courses: Course[];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses(){
    this.http.get<Course[]>('https://golf-courses-api.herokuapp.com/courses')
    .subscribe(
      response => {
        console.log(response);
        this.courses = response['courses'];
      }
    )
  }

}

