import { Injectable } from '@angular/core';
import { Fastag } from '../_models/fastag';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FastagCrudService {
  currentDate: Date = new Date();
  fastTags: Fastag[] = [
    { id: 1, operator: 'Airtel Payment Bank', name: 'Pawan Kumar', vehicleNumber: 'HR10E3750', amount: 500, status: 'success', createdAt: this.currentDate, updatedAt: new Date() },
    { id: 2, operator: 'HDFC Bank', name: 'Rajesh Sharma', vehicleNumber: 'DL8CNB2827', amount: 1000, status: 'pending', createdAt: this.currentDate, updatedAt: new Date()},
    { id: 3, operator: 'IDFC Bank', name: 'M P Bhardwaj', vehicleNumber: 'DL8CBC5465', amount: 750, status: 'success', createdAt: this.currentDate, updatedAt: new Date() },
    { id: 4, operator: 'Airtel Payment Bank', name: 'Pradeep Gupta', vehicleNumber: 'HR51BY2387', amount: 3750, status: 'failed', createdAt: this.currentDate, updatedAt: new Date() },
    { id: 5, operator: 'PayTm', name: 'Ravi Kumar', vehicleNumber: 'UP71SDC6754', amount: 750, status: 'success', createdAt: this.currentDate, updatedAt: new Date() },
    { id: 6, operator: 'IDFC Bank', name: 'Prashant', vehicleNumber: 'DL8CBC5465', amount: 700, status: 'success', createdAt: this.currentDate, updatedAt: new Date() }
  ];

  constructor() { }

  getFastTags(): Fastag[] {
    return this.fastTags;
  }

  getFastagById(id: number): Fastag | undefined {
    return this.fastTags.find(fastag => fastag.id === id);
  }

  addFastag(fastag: Fastag): void {
    fastag.id = this.fastTags.length + 1; // Simple ID generation
    fastag.createdAt = this.currentDate;
    fastag.updatedAt = new Date();
    this.fastTags.push(fastag);
  }

   deleteFastTag(id: number) {
    this.fastTags = this.fastTags.filter(fastTag => fastTag.id !== id);
  }
}