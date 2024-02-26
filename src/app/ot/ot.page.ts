import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';


function atLeastOneFieldValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const values = Object.values(control.value);
  const isAnyFieldEmpty = values.some(value => !value);
  return isAnyFieldEmpty ? { 'atLeastOneFieldEmpty': true } : null;
}

@Component({
  selector: 'app-ot',
  templateUrl: './ot.page.html',
  styleUrls: ['./ot.page.scss'],
})
export class OTPage implements OnInit {
  myForm1: FormGroup;

  constructor(private formBuilder: FormBuilder, private router : Router ) {
    this.myForm1 = this.formBuilder.group({
      utilisateur: ['', Validators.required],
      date_creation: ['', Validators.required],
      centre_de_charge: ['', Validators.required],
      anomalie: ['', Validators.required],
      urgence: ['', Validators.required],
      impact: ['', Validators.required],
      type: ['', Validators.required],
      prestation: [''],
      vandalisme: [''],
      photos:[''],
      description: ['']
    }, {atLeastOneFieldValidator });
  }

  navigateToDiPage() {
    this.router.navigate(['/detailsot']);
  }

  ngOnInit() {}

  onSubmit() {
    if (this.myForm1.valid) {
      const formData = this.myForm1.value;
  
      
      let existingData = localStorage.getItem('formData');
      let existingArray = existingData ? JSON.parse(existingData) : [];
  
      
      existingArray.push(formData);
  
      
      localStorage.setItem('formData', JSON.stringify(existingArray));
  
      console.log('Form data saved successfully:', existingArray);
  
      
      this.myForm1.reset(); 
    } else {
      alert('vous devez remplir tous les champs');
    }
  }

  onCancel(){
    this.myForm1.reset();
    alert('demande annuler')
  }
  

}
