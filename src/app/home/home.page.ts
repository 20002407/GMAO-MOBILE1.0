import { ApiService } from '../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apiService: ApiService) {}

  onSubmit(title: string, date: string, description: string) {
    // Check if any of the values are undefined and provide default values if needed
    const taskData = {
      title: title || '', // Providing an empty string as default value
      date: date || '', // Providing an empty string as default value
      description: description || '' // Providing an empty string as default value
    };
  
    this.apiService.addTask(taskData).subscribe(
      response => {
        console.log('Task added successfully:', response);
        
      },

     
      error => {
        console.error('Error adding task:', error);
      }
    );
  }
  
}
