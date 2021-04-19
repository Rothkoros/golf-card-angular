import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameDetailService } from '../../services/game-detail.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CourseData } from '../../interfaces/course-data';

@Component({
  selector: 'app-thanksgiving-point',
  templateUrl: './thanksgiving-point.component.html',
  styleUrls: ['./thanksgiving-point.component.scss'],
})
export class ThanksgivingPointComponent implements OnInit {
  constructor(
    private gameDetailService: GameDetailService,
    private router: Router,
    private http: HttpClient
  ) {}
  public teeIndex;
  data: CourseData;
  teeType: string;
  outYards = 0;
  inYards = 0;
  yardsArray = [];

  teeTypes = [
    {
      index: 0,
      name: 'pro',
    },
    {
      index: 1,
      name: 'champion',
    },
    {
      index: 2,
      name: 'men',
    },
    {
      index: 3,
      name: 'women',
    },
  ];

  ngOnInit(): void {
    const foxId = '11819';
    this.gameDetailService.getCoursedetail(foxId).subscribe((response) => {
      this.data = response.data;
      console.log(this.data);
    });
  }

  getYards = (): any => {
    console.log(this.yardsArray);
    this.outYards = 0;
    this.inYards = 0;
    this.yardsArray = [];
    console.log(this.teeTypes);
    this.teeTypes.forEach((i) => {
      if (i.name === this.teeType) {
        this.teeIndex = i.index;
        return this.teeIndex;
      }
    });

    this.data.holes.forEach((index, value) => {
      this.yardsArray.push(index.teeBoxes[this.teeIndex].yards);

      if (value < 9) {
        this.outYards += index.teeBoxes[this.teeIndex].yards;
      } else if (value > 8 && value < 18) {
        this.inYards += index.teeBoxes[this.teeIndex].yards;
      }
    });
  };
}
