import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3300'; // Update this with your backend API URL

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/task_table`);
  }

  getTaskById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/task_table/${id}`);
  }

  addTask(taskData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/task_table`, taskData);
  }

  updateTask(taskId: number, taskData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/task_table/${taskId}`, taskData);
  }

  deleteTask(taskId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/task_table/${taskId}`);
  }
}

