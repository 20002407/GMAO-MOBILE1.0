import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';



function atLeastOneFieldValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const values = Object.values(control.value);
  const isAnyFieldEmpty = values.some(value => !value);
  return isAnyFieldEmpty ? { 'atLeastOneFieldEmpty': true } : null;
}

@Component({
  selector: 'app-di',
  templateUrl: './di.page.html',
  styleUrls: ['./di.page.scss'],
})
export class DIPage implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      ouvrage: ['', Validators.required],
      element: ['', Validators.required],
      famille: ['', Validators.required],
      centre: ['', Validators.required],
      demandeur: ['', Validators.required],
      date_reclamation: ['', Validators.required],
      type_anomalie: ['', Validators.required],
      vandalisme: [''],
      photos: [''],
      description: ['']
    }, {atLeastOneFieldValidator });
  }

  
  

  ngOnInit() {}

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;

      // Retrieve existing data from localStorage
      let existingData = localStorage.getItem('formData');
      let existingArray = existingData ? JSON.parse(existingData) : [];

      // Add new form data to the existing array
      existingArray.push(formData);

      // Update localStorage with the updated array
      localStorage.setItem('formData', JSON.stringify(existingArray));
      localStorage.getItem('formData')

      console.log('Form data saved successfully:', existingArray);
      
    } else {
      alert('vous dovez remplire tous les inputs ')
    }
  }
}
