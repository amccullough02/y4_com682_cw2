import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterOutlet],
  providers: [WebService],
  templateUrl: './view.component.html',
})
export class ViewComponent {
  media_data: any;

  constructor(
    public webService: WebService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.webService
      .getOneMedia(this.route.snapshot.paramMap.get('id'))
      .subscribe((response: any) => {
        this.media_data = response;
      });
  }

  decodeB64(data: string) {
    let decodedData = atob(data);
    return decodedData;
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this item?'))
      this.webService
        .deleteMedia(this.route.snapshot.paramMap.get('id'))
        .subscribe(() => {
          this.router.navigate(['/gallery']);
        });
  }
}
