import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiBilServiceService {

 
    private apiUrl = 'http://mahesh:8083/enquiryCibil '; 
  
    constructor(private http: HttpClient) {}
  
    getCibilScore(): Observable<number> {
      return this.http.get<number>(this.apiUrl);
    }
  }

