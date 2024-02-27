import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private navCtrl: NavController, private router: Router) { }

  navigateToPage(page: string) {
    this.navCtrl.navigateForward('/' + page); 
  }

  showDropdown1: boolean = false;
  showDropdown2: boolean = false;
  
  

  toggleDropdown(dropdown: string) {
    if (dropdown === 'dropdown1') {
      this.showDropdown1 = !this.showDropdown1;
      this.showDropdown2 = false; // Close other dropdowns if opened
    } else if (dropdown === 'dropdown2') {
      this.showDropdown2 = !this.showDropdown2;
      this.showDropdown1 = false; // Close other dropdowns if opened
    } 
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

}
