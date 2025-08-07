import { Component, OnInit } from '@angular/core';
import { Fastag } from '../../../_models/fastag';
import { FastagCrudService } from '../../../_service/fastag-crud.service';

@Component({
  selector: 'app-fast-tag-list',
  standalone: false,
  templateUrl: './fast-tag-list.component.html',
  styleUrl: './fast-tag-list.component.css'
})
export class FastTagListComponent implements OnInit {
  fastTags: Fastag[] = [];

  constructor(private fastagService: FastagCrudService) {}

  ngOnInit() {
    // Simulate fetching data from a service
    this.fastTags = this.fastagService.getFastTags();
    // console.log('FastTags loaded:', this.fastTags);
  }

  cancel() {
    // Logic to cancel the operation
    console.log('Operation cancelled');
  }

  transforValue(value: string): string {
    if(!value) return '';
    let newValue = '';
    newValue = `${value.substring(0, 2)}XXX XXX${value.substring(value.length - 2)}`;
    return newValue;
  }

}
