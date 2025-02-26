import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  @Output() toggler = new EventEmitter();
  
  ngOnInit() {
    
  }

  toggleNavbar() {
    this.toggler.emit();
  }
}
