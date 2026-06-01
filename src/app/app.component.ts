import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {
  response = '';

  backendUrl = 'https://nest-backend-https-cdn-demo.apps.itz-vmojl8.tzaas.techzone.ibm.com/api/hello';

  constructor(private http: HttpClient) {}

  callBackend() {
    this.http
      .get(this.backendUrl, { responseType: 'text' })
      .subscribe({
        next: res => this.response = res,
        error: err => this.response = 'Erro ao chamar backend: ' + err.message
      });
  }
}