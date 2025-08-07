import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { Fastag } from '../../../_models/fastag';
import { FastagCrudService } from '../../../_service/fastag-crud.service';
import { BillFetchResponse } from '../../../_models/billFetchResponse';

@Component({
  selector: 'app-fastag-detail',
  standalone: false,
  templateUrl: './fastag-detail.component.html',
  styleUrl: './fastag-detail.component.css'
})
export class FastagDetailComponent implements OnInit {
  @Input() requestForm: FormGroup;
  @Input() billFetchResponse: BillFetchResponse;
  @Input() operatorName: string;
  @Output() cancelButton = new EventEmitter();
  fastag: Fastag = { id: 0, operator: '', name: '', vehicleNumber: '', amount: 0 };

  rechargeFastag: FormGroup;
  isDisabled: boolean = true;

  constructor(private fb: FormBuilder, private router: Router, private fastagService: FastagCrudService) {}
  ngOnInit() {
    this.isDisabled = true;
    console.log(this.operatorName);
    this.rechargeFastag = this.fb.group({
      category: ['FASTag', Validators.required],
      operator: [this.requestForm.value.operatorName, [Validators.required]],
      mobile: ['99XXXXXX99', [Validators.required]],
      customerName: [this.billFetchResponse.customername, [Validators.required]],
      vehicleNumber: [this.requestForm.value.vehicleNumber, [Validators.required]],
      amount: [this.requestForm.value.amount, [Validators.required]],
      charges: [this.billFetchResponse.bbpsCharges, [Validators.required]],
      amountToPay: ['', [Validators.required]],
      confirmation: ['', [Validators.required]],
      tpin: ['', [Validators.required]]
    }
    )
  }

  pay(submitForm: FormGroup) {
    if(submitForm.valid) {
      // alert('Bill paid successfully');
      this.fastag = {
        id: this.fastagService.getFastTags().length + 1,
        operator: submitForm.value.operator,
        name: submitForm.value.customerName,
        vehicleNumber: submitForm.value.vehicleNumber,
        amount: submitForm.value.amountToPay,
        status: 'success',
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.fastagService.addFastag(this.fastag);
      console.log('Fastag added successfully:', this.fastag);
      this.requestForm.reset();
      this.rechargeFastag.reset();
      this.isDisabled = true;
      // Emit the cancel event and navigate to the fastag list
      this.requestForm.markAsPristine();
      this.requestForm.markAsUntouched();
      this.cancelButton.emit();
      this.router.navigateByUrl('/dashboard');
    }
  }

  cancel() {
    this.cancelButton.emit();
    this.router.navigateByUrl('/dashboard');
  }

}
