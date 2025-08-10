import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../_models/apiResponse';
import { Operator } from '../_models/operators';
import { map, Observable } from 'rxjs';
import { BillFetchCredentials } from '../_models/billFetchCredentials';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url = 'https://api.pointpalindia.com';
  apiCredentials = {
    apiid: "AP90001",                               // api id recieved by pointpal
    token: "34a8fb5a-5336-4beb-b67b-e7791df624d4",//"79977cf3-6f30-4f9e-a554-4a9ef6e512a9",  //"34a8fb5a-5336-4beb-b67b-e7791df624d4" // api token received from pointpal
    serviceName: "fastag"
  }

  constructor(private httpClient: HttpClient) {
  }

  getOperators(): Observable<ApiResponse<Operator[]>> {
    let apiResponse: ApiResponse<Operator[]> = {
      statusCode: 'TXN',
      message: 'failed',
      data: []
    };
    // fetch(`${this.url}/api/Recharge/OperatorList`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(this.apiCredentials)
    // })
    // .then(response => {
    //   console.log(response);
    //   let responseModel = response.json();
    //   const data = responseModel.map(result => {
    //     apiResponse = {
    //       statusCode: 'TXN',
    //       message: 'success',
    //       data: result.body.data
    //     }
    //   })
    // })
    // .catch(err => { 
    //   console.log(err)
    // });

    return this.httpClient.post<ApiResponse<Operator[]>>(`${this.url}/api/Recharge/OperatorList`, this.apiCredentials)
      .pipe(
        map(response => {
          if (response.statusCode === 'TXN') {
            apiResponse.statusCode = response.statusCode;
            apiResponse.message = response.message;
            apiResponse.data = response.data;
          } else {
            apiResponse.statusCode = 'ERROR';
            apiResponse.message = 'Failed to fetch operators';
          }
          return apiResponse;
        })
      );
  }

  getBillDetail(billFetchCredentials: BillFetchCredentials): Observable<ApiResponse<any>> {
    billFetchCredentials.apiid = this.apiCredentials.apiid;
    billFetchCredentials.token = this.apiCredentials.token;
    billFetchCredentials.requestId = new Date().getTime().toString(); // Unique request ID based on timestamp

    return this.httpClient.post<ApiResponse<any>>(`${this.url}/api/Recharge/BillFetch`, billFetchCredentials)
      .pipe(
        map(response => {
          if (response.statusCode === 'TXN') {
            return response;
          } else {
            return {
              statusCode: 'ERROR',
              message: 'Failed to fetch bill details',
              data: []
            };
          }
        })
      );
  }
}
