import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from '../web.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [WebService],
  templateUrl: './view.component.html',
})
export class ViewComponent {
  media_data: any;
  updateForm!: FormGroup;

  constructor(
    public webService: WebService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.webService
      .getOneMedia(this.route.snapshot.paramMap.get('id'))
      .subscribe((response: any) => {
        this.media_data = response;
      });

    this.updateForm = this.formBuilder.group({
      category: [''],
      description: [''],
    });
  }

  decodeB64(data: string) {
    let decodedData = atob(data);
    return decodedData;
  }

  onUpdate() {
    const formData = new FormData();
    formData.append('category', this.updateForm.get('category')?.value);
    formData.append('description', this.updateForm.get('description')?.value);
    this.webService
      .editMedia(formData, this.route.snapshot.paramMap.get('id'))
      .subscribe(() => {
        console.log('Media updated');
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([`/gallery/${this.route.snapshot.paramMap.get('id')}`]);
        })
      });
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
