import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fastag',
  standalone: false,
  templateUrl: './fastag.component.html',
  styleUrl: './fastag.component.css'
})
export class FastagComponent implements OnInit {
  operators: string[] = ['Airtel Payment Bank', 'IDFC Bank', 'HDFC Bank', 'PayTm Payment Bank']
  showDetail: boolean;

  fastagForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.showDetail = false;
    this.fastagForm = this.fb.group ({
      operator: ['', [Validators.required]],
      vehicalNumber: ['', [Validators.required]],
      amount: ['',[Validators.required, Validators.maxLength(3), Validators.minLength(2)]],
      agreed: ['', [Validators.required]]
    }); 
  }

  onSubmit(form: FormGroup) {
    console.log(form);
    if(form.valid) {
      this.showDetail = true;
    }
  }

  cencelButton() {
    this.showDetail = false;
    this.fastagForm.reset();
  }
}
