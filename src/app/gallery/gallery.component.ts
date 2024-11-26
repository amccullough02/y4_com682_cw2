import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [RouterOutlet],
  providers: [WebService],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  
}