export interface BillFetchResponse {
    status: string,
    message: string,
    dueamount: string,
    balance: string,
    duedate: string,
    customername: string,
    billnumber: string,
    acceptPartPay: boolean,
    bbpsCharges: number,
    minAmount: number,
    maxAmount: number,
    billUpdate: string,
    clientID: string,
    billFetchID: string
}