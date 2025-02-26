import { Injectable } from '@angular/core';
import { Giftcards } from '../_models/gitcards';

@Injectable({
  providedIn: 'root'
})
export class GiftCardsService {
  constructor() { }
  getCardsByCategory(giftCardS: Giftcards[], category: string) {
     return giftCardS.filter(a=> a.category === category).sort((a, b) => a.category < b.category ? -1 : 1);
  }
}
