import { Component, OnInit } from '@angular/core';
import { Giftcards } from '../../_models/gitcards';
import { GiftCardsService } from '../../_service/gift-cards.service';

@Component({
  selector: 'app-gift-cards',
  standalone: false,
  templateUrl: './gift-cards.component.html',
  styleUrl: './gift-cards.component.css'
})
export class GiftCardsComponent implements OnInit {
  giftCards: Giftcards[] = [];
  currentGiftCards: Giftcards[] = [];
  showText: boolean = true;
  constructor(private giftCardService: GiftCardsService) { }
  ngOnInit() {
    this.giftCards = [
      { 
        srno: 1, 
        category: 'Fashion', 
        brandName: 'Pantaloon', 
        brandImageLogo: 'images/brands/pantaloon.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 100 
      },
      { 
        srno: 2, 
        category: 'Fashion', 
        brandName: 'LifeStyle', 
        brandImageLogo: 'images/brands/lifestyle.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 100 
      },
      { 
        srno: 3, 
        category: 'Fashion', 
        brandName: 'Westside', 
        brandImageLogo: 'images/brands/Westside.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 100 
      },
      { 
        srno: 4, 
        category: 'Electronics', 
        brandName: 'Croma', 
        brandImageLogo: 'images/brands/croma.jpeg', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 100
      },
      { 
        srno: 5, 
        category: 'Electronics', 
        brandName: 'Reliance Digital', 
        brandImageLogo: 'images/brands/reliance-digital.jpg', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 100
      },
      { 
        srno: 6, 
        category: 'Electronics', 
        brandName: 'Vijay Sales', 
        brandImageLogo: 'images/brands/vijay-sales.jpeg', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 100
      },
      { 
        srno: 7, 
        category: 'LifeStyle', 
        brandName: 'HomeCenter', 
        brandImageLogo: 'images/brands/homecenter.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 100
      },
      { 
        srno: 8, 
        category: 'LifeStyle', 
        brandName: 'LifeStyle', 
        brandImageLogo: 'images/brands/lifestyle.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 100
      },
      { 
        srno: 9, 
        category: 'Fashion', 
        brandName: 'Pantaloon', 
        brandImageLogo: 'images/brands/pantaloon.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 250 
      },
      { 
        srno: 10, 
        category: 'Fashion', 
        brandName: 'LifeStyle', 
        brandImageLogo: 'images/brands/lifestyle.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 250 
      },
      { 
        srno: 11, 
        category: 'Fashion', 
        brandName: 'Westside', 
        brandImageLogo: 'images/brands/Westside.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 250 
      },
      { 
        srno: 12, 
        category: 'Electronics', 
        brandName: 'Croma', 
        brandImageLogo: 'images/brands/croma.jpeg', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 250
      },
      { 
        srno: 13, 
        category: 'Electronics', 
        brandName: 'Reliance Digital', 
        brandImageLogo: 'images/brands/reliance-digital.jpg', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 250
      },
      { 
        srno: 14, 
        category: 'Electronics', 
        brandName: 'Vijay Sales', 
        brandImageLogo: 'images/brands/vijay-sales.jpeg', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 250
      },
      { 
        srno: 15, 
        category: 'LifeStyle', 
        brandName: 'HomeCenter', 
        brandImageLogo: 'images/brands/homecenter.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 250
      },
      { 
        srno: 16, 
        category: 'LifeStyle', 
        brandName: 'LifeStyle', 
        brandImageLogo: 'images/brands/lifestyle.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 250
      },
      { 
        srno: 17, 
        category: 'Fashion', 
        brandName: 'Pantaloon', 
        brandImageLogo: 'images/brands/pantaloon.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 500 
      },
      { 
        srno: 18, 
        category: 'Fashion', 
        brandName: 'LifeStyle', 
        brandImageLogo: 'images/brands/lifestyle.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 500 
      },
      { 
        srno: 19, 
        category: 'Fashion', 
        brandName: 'Westside', 
        brandImageLogo: 'images/brands/Westside.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 500 
      },
      { 
        srno: 20, 
        category: 'Electronics', 
        brandName: 'Croma', 
        brandImageLogo: 'images/brands/croma.jpeg', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 500
      },
      { 
        srno: 21, 
        category: 'Electronics', 
        brandName: 'Reliance Digital', 
        brandImageLogo: 'images/brands/reliance-digital.jpg', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 500
      },
      { 
        srno: 22, 
        category: 'Electronics', 
        brandName: 'Vijay Sales', 
        brandImageLogo: 'images/brands/vijay-sales.jpeg', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 500
      },
      { 
        srno: 23, 
        category: 'LifeStyle', 
        brandName: 'HomeCenter', 
        brandImageLogo: 'images/brands/homecenter.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 500
      },
      { 
        srno: 24, 
        category: 'LifeStyle', 
        brandName: 'LifeStyle', 
        brandImageLogo: 'images/brands/lifestyle.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 500
      },{ 
        srno: 25, 
        category: 'Fashion', 
        brandName: 'Pantaloon', 
        brandImageLogo: 'images/brands/pantaloon.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 1000 
      },
      { 
        srno: 26, 
        category: 'Fashion', 
        brandName: 'LifeStyle', 
        brandImageLogo: 'images/brands/lifestyle.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 1000 
      },
      { 
        srno: 27, 
        category: 'Fashion', 
        brandName: 'Westside', 
        brandImageLogo: 'images/brands/Westside.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 1000
      },
      { 
        srno: 28, 
        category: 'Electronics', 
        brandName: 'Croma', 
        brandImageLogo: 'images/brands/croma.jpeg', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 1000
      },
      { 
        srno: 29, 
        category: 'Electronics', 
        brandName: 'Reliance Digital', 
        brandImageLogo: 'images/brands/reliance-digital.jpg', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 1000
      },
      { 
        srno: 30, 
        category: 'Electronics', 
        brandName: 'Vijay Sales', 
        brandImageLogo: 'images/brands/vijay-sales.jpeg', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 1000
      },
      { 
        srno: 31, 
        category: 'LifeStyle', 
        brandName: 'HomeCenter', 
        brandImageLogo: 'images/brands/homecenter.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 1000
      },
      { 
        srno: 32, 
        category: 'LifeStyle', 
        brandName: 'LifeStyle', 
        brandImageLogo: 'images/brands/lifestyle.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 1000
      },
      { 
        srno: 33, 
        category: 'Travel', 
        brandName: 'Yatra', 
        brandImageLogo: 'images/brands/yatra.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 1000
      },
      { 
        srno: 34, 
        category: 'Travel', 
        brandName: 'Yatra', 
        brandImageLogo: 'images/brands/yatra.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 2000
      },
      { 
        srno: 35, 
        category: 'Travel', 
        brandName: 'Yatra', 
        brandImageLogo: 'images/brands/yatra.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 5000
      },
      { 
        srno: 36, 
        category: 'Travel', 
        brandName: 'Make My Trip', 
        brandImageLogo: 'images/brands/makemytrip.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 1000
      },
      { 
        srno: 34, 
        category: 'Travel', 
        brandName: 'Make My Trip', 
        brandImageLogo: 'images/brands/makemytrip.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 2000
      },
      { 
        srno: 35, 
        category: 'Travel', 
        brandName: 'Make My Trip', 
        brandImageLogo: 'images/brands/makemytrip.png', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        denomination: 5000
      },
      
    ];

    this.currentGiftCards = this.giftCards.sort((a, b) => a.brandName < b.brandName ? -1 : 1);
  }

  toggleText(i: number) {
    this.showText != this.showText;
    console.log(this.showText);
    let description = this.giftCards[i].description;
    if (this.showText) {
      return this.giftCards[i].description = this.giftCards[i].description.substring(0, 100) + '...';
    }
    return description;
  }

  electronics() {
    this.currentGiftCards = this.giftCards.filter(a => a.category === 'Electronics');
    // this.currentGiftCards = this.giftCardService.getCardsByCategory(this.giftCards, 'Electronics');
    console.log(this.currentGiftCards);
  }

  apparels() {
    this.currentGiftCards = this.giftCards.filter(a => a.category === 'Fashion');
    // this.currentGiftCards = this.giftCardService.getCardsByCategory(this.giftCards, 'Fashion');
    console.log(this.currentGiftCards);
  }

  lifeStyle() {
    this.currentGiftCards = this.giftCards.filter(a => a.category === 'LifeStyle');
    // this.currentGiftCards = this.giftCardService.getCardsByCategory(this.giftCards, 'LifeStyle');
    console.log(this.currentGiftCards);
  }

  travel() {
    this.currentGiftCards = this.giftCards.filter(a=> a.category === 'Travel');
  }
}
