import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { CookieServiceService } from '../../services/cookie-service.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule,HeaderComponent, CommonModule, MatButtonModule, MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, RouterOutlet],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  // showSubmenu: boolean = false;
  isShowing = false;
  // showSubSubMenu: boolean = false;
  constructor(private router:Router,private cookie:CookieServiceService){}

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  logout(){
    this.cookie.removeTokens()
    this.router.navigate(['/login'])
  }
}
