import { Component, OnInit } from '@angular/core';
import { consumerDestroy } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  showHideNav: boolean;
  ngOnInit() {
    this.showHideNav = false;
  }
  
  toggleSideNav() {
    this.showHideNav = !this.showHideNav;
    console.log(this.showHideNav)
  }
}
