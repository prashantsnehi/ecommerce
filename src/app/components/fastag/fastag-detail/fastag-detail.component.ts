import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fastag-detail',
  standalone: false,
  templateUrl: './fastag-detail.component.html',
  styleUrl: './fastag-detail.component.css'
})
export class FastagDetailComponent implements OnInit {
  @Input() requestForm: FormGroup;
  @Output() cancelButton = new EventEmitter();

  rechargeFastag: FormGroup;
  isDisabled: boolean;

  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit() {
    this.isDisabled = true;
    this.rechargeFastag = this.fb.group({
      category: ['FASTag', Validators.required],
      operator: [this.requestForm.value.operator, [Validators.required]],
      mobile: ['9810013306', [Validators.required]],
      customerName: ['PARSHANT KUMAR SNEHI', [Validators.required]],
      vehicalNumber: [this.requestForm.value.vehicalNumber, [Validators.required]],
      amount: [this.requestForm.value.amount, [Validators.required]],
      charges: ['0.00', [Validators.required]],
      amountToPay: ['', [Validators.required]],
      tpin: ['', [Validators.required]]
    }
    )
  }

  cancel() {
    this.cancelButton.emit();
    this.router.navigateByUrl('/fastag');
  }

}
