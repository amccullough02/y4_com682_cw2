import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}