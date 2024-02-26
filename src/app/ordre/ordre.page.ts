import { Component, OnInit } from '@angular/core';
import { ordredata } from '../ordredata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordre',
  templateUrl: './ordre.page.html',
  styleUrls: ['./ordre.page.scss'],
})
export class OrdrePage implements OnInit {
  items: any[];

  constructor(private router : Router) { 
    this.items = ordredata;
  }
  navigateToDiPage() {
    this.router.navigate(['/detailsot']);
  } 
  ngOnInit() {
  }

}
