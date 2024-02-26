import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should retrieve all tasks', () => {
    const mockTasks = [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }];
    service.getAllTasks().subscribe(tasks => {
      expect(tasks.length).toBe(2);
      expect(tasks).toEqual(mockTasks);
    });

    const req = httpTestingController.expectOne('http://localhost:3300/task_table');
    expect(req.request.method).toEqual('GET');
    req.flush(mockTasks);
  });

  it('should handle errors when retrieving tasks', () => {
    const errorMessage = '404 Not Found';
    service.getAllTasks().subscribe(
      () => fail('expected to fail'),
      error => {
        expect(error.message).toContain(errorMessage);
      }
    );

    const req = httpTestingController.expectOne('http://localhost:3300/task_table');
    req.flush(errorMessage, { status: 404, statusText: 'Not Found' });
  });
});



