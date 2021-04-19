import { TestBed } from '@angular/core/testing';

import { CourseSelectService } from './course-select.service';

describe('CourseSelectService', () => {
  let service: CourseSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
