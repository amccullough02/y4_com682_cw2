import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
  constructor(private http: HttpClient) {}

  getMedia() {
    return this.http.get<any>(
      'https://prod-29.eastus.logic.azure.com:443/workflows/5c6b62deeac94a0eba28f772ff9e3d2c/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=1vzXnVe3FnWxbGgNIsinTdHb5aLLEMO38QVuKy-oFxg'
    );
  }

  uploadMedia(formData: FormData) {
    return this.http.post(
      'https://prod-82.eastus.logic.azure.com:443/workflows/49280ca72ace44f09fbcc67a6079e2dd/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=6yfHBSoVtjw1s-xFj7kXhYCeHCJ72PIEcYRKq4Jw72g',
      formData
    );
  }
}
