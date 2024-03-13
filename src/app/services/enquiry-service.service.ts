import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryServiceService {
  private apiUrl = 'http://mahesh:8083/enquiry';

  constructor(private http: HttpClient) {}

  fetchEnquiryData(): Observable<any> {
    return this.http.get('http://mahesh:8083/enquiry');
  }
}
