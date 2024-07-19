import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
