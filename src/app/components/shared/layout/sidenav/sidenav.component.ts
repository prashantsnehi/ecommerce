import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: false,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {
  @Output() showHideNav = new EventEmitter();
  hideNav: boolean = false;

  constructor(private router: Router) {}
  
  ngOnInit() {
    
  }
  
  getComponent(routing: string) {
    this.hideNav = !this.hideNav;
    this.showHideNav.emit();
    this.router.navigateByUrl(routing);
  }
}
