import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../_service/api.service';
import { Operator } from '../../_models/operators';
import { ApiResponse } from '../../_models/apiResponse';
import { BillFetchCredentials } from '../../_models/billFetchCredentials';
import { BillFetchResponse } from '../../_models/billFetchResponse';

@Component({
  selector: 'app-fastag',
  standalone: false,
  templateUrl: './fastag.component.html',
  styleUrl: './fastag.component.css'
})
export class FastagComponent implements OnInit {
  // operators: string[] = ['Airtel Payment Bank', 'IDFC Bank', 'HDFC Bank', 'PayTm Payment Bank']
  showDetail: boolean;
  operators: Operator[] = [];
  operatorName: string = '';
  error: any;
  displayError: boolean;
  apiResponse: ApiResponse<Operator[]> = {
    statusCode: '',
    message: '',
    data: []
  };

  billfetchResponse: BillFetchResponse = {
    status: '',
    message: '',
    dueamount: '',
    balance: '',
    duedate: '',
    customername: '',
    billnumber: '',
    acceptPartPay: false,
    bbpsCharges: 0,
    minAmount: 0,
    maxAmount: 0,
    billUpdate: '',
    clientID: '',
    billFetchID: ''
  };

  billfetchCredentials: BillFetchCredentials = {
    apiid: '',
    token: '',
    requestId: '',
    customerRef: '',
    operatorId: '',
    circle: '5', // Assuming circle is a constant value
    optional1: '',
    optional2: '',
    optional3: '',
    optional4: '',
    optional5: '',
    optional6: '',
    optional7: '',
    optional8: '',
    optional9: ''
  };


  fastagForm: FormGroup;
  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.showDetail = false;
    this.displayError = false;
    this.fastagForm = this.fb.group({
      operator: ['', [Validators.required]],
      operatorName: [''],
      vehicleNumber: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(2)]],
      agreed: ['', [Validators.required]]
    });
    // Fetch operators from the API
    this.getOperators();
  }

  getOperators() {
    this.apiService.getOperators().subscribe((response) => {
      // debugger;
      // console.log(response);
      this.apiResponse = response;
      this.operators = response.data as Operator[];
      this.operators = this.operators.sort((a, b) => a.operatorName.localeCompare(b.operatorName));
      // if (this.apiResponse.statusCode === 'TXN') {
      //   // this.operators = this.apiResponse.data;
      //   this.apiResponse.data.map(operator => {
      //     this.operators.push({
      //       isActive: operator.isActive,
      //       max: operator.max,
      //       min: operator.min,
      //       operatorCode: operator.operatorCode,
      //       operatorName: operator.operatorName,
      //       serviceName: operator.serviceName
      //     } as Operator);
      //   });
      //   // console.log(this.operators);
      // } else if (this.apiResponse.statusCode === 'ERROR') {
      //   this.operators = [];
      //   this.fastagForm.get('operator')?.setValue('');
      //   console.error('Error fetching operators:', this.apiResponse.message);
      // } else {
      //   console.error('Failed to fetch operators:', this.apiResponse.message);
      // }
      // console.log(this.apiResponse);
    }, error => {
      console.error('Error fetching operators:', error);
    });
  }
  onSubmit(form: FormGroup) {
    if (form.valid) {
      // console.log(form);
      console.log(this.operatorName);
      form.value.operatorName = this.operatorName;
      this.billfetchCredentials.customerRef = this.fastagForm.value.vehicleNumber;
      this.billfetchCredentials.operatorId = this.fastagForm.value.operator;
      this.billfetchCredentials.circle = '5'; // Assuming circle is a constant value
      // console.log(this.billfetchCredentials);
      this.apiService.getBillDetail(this.billfetchCredentials).subscribe((response) => {
        console.log(JSON.stringify(response));
        this.billfetchResponse = response.data as BillFetchResponse;
        this.showDetail = true;
      }, error => {
        console.error('Error fetching bill details:', error);
        this.displayError = true;
        error = `Error: ${error}`;
      }); 
    }
  }

  cencelButton() {
    this.showDetail = false;
    this.fastagForm.reset();
  }

  setOperatorName(value: any) {
    // console.log(value.target.value);
    this.operatorName = this.operators.filter(x => x.operatorCode === value.target.value)[0].operatorName;
  }
}
