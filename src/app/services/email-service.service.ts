import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  private apiUrl = '';

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any) {
    // Make an HTTP POST request to your backend API
    return this.http.post(`${this.apiUrl}/send-email`, emailData);
  }
}
