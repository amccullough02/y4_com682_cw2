import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebService } from '../web.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'upload',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [WebService],
  templateUrl: './upload.component.html',
})
export class UploadComponent {
  uploadForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private webService: WebService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.uploadForm = this.formbuilder.group({
      userId: [''],
      userName: [''],
      fileName: [''],
      description: [''],
      category: [''],
      hidden: false,
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit() {
    const formData = new FormData();

    formData.append('hidden', 'false');
    Object.entries(this.uploadForm.value).forEach(([key, value]) => {
      if (key !== 'hidden') {
        formData.append(key, value as string);
      }
    });

    if (this.selectedFile) {
      formData.append('File', this.selectedFile, this.selectedFile.name);
      console.log('Formdata contains file:', this.selectedFile);
    }

    this.webService.uploadMedia(formData).subscribe(() => {
      console.log('Upload successful');
      this.uploadForm.reset({ hidden: false });
      this.selectedFile = null;
    });
  }
}
