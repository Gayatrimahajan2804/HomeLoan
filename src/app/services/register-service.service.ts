import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private apiurl='';
  constructor(private http:HttpClient) { }

  fetchRegisterData(): Observable<any>
  {
    return this.http.get('');
  }
}
