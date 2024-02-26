import { Component, OnInit } from '@angular/core';
import { data } from '../data'
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})

export class TaskPage implements OnInit {
  items: any[];
  
  constructor(private router : Router) { 
    this.items = data;
  }
  navigateToDiPage() {
    this.router.navigate(['/detailsot']);
  } 
  ngOnInit() {
    

  }

}
