import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Giftcards } from '../../../_models/gitcards';

@Component({
  selector: 'app-giftcard',
  standalone: false,
  templateUrl: './giftcard.component.html',
  styleUrl: './giftcard.component.css'
})
export class GiftcardComponent implements OnInit {
  @Input() cardDetail: Giftcards;
  @Input() brandDescript: string;
  @Output() showMore = new EventEmitter();
  togglePipe: boolean = true;

  // showMore: boolean = true;

  ngOnInit() {
    
  }

  showMoreText() {
    this.togglePipe = !this.togglePipe;
    console.log(this.togglePipe);
    // this.showMore.emit();
  }

}
