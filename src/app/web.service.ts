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

  getOneMedia(ID: any) {
    return this.http.get<any>(
      'https://prod-74.eastus.logic.azure.com/workflows/fe363cc053654ea2baf50e39da84b2b2/triggers/When_a_HTTP_request_is_received/paths/invoke/rest/v1/assets/' +
        ID +
        '?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=6KxPlop0eNYJtBR5808xcdGP3v_HHtRmP5neb529wno'
    );
  }

  uploadMedia(formData: FormData) {
    return this.http.post(
      'https://prod-82.eastus.logic.azure.com:443/workflows/49280ca72ace44f09fbcc67a6079e2dd/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=6yfHBSoVtjw1s-xFj7kXhYCeHCJ72PIEcYRKq4Jw72g',
      formData
    );
  }

  editMedia(formData: FormData, ID: any) {
    return this.http.put(
      'https://prod-36.eastus.logic.azure.com/workflows/2174c7f4fe734e62a1665ef8f1d78f45/triggers/When_a_HTTP_request_is_received/paths/invoke/rest/v1/assets/' +
        ID +
        '?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=fDbNL6V-uhPJvigo--XSKpDzuORB2wOcyDo3Vi7gwz0',
      formData
    );
  }

  deleteMedia(ID: any) {
    return this.http.delete(
      'https://prod-01.eastus.logic.azure.com/workflows/7fc4227d1a3844098ace11e808b8694f/triggers/When_a_HTTP_request_is_received/paths/invoke/rest/v1/assets/' +
        ID +
        '?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=_2LITLoFULaa4fWtXSl4NXAC7aXcWw6BETR4pYox01Q'
    );
  }
}
