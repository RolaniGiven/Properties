import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/users'

@Injectable({
  providedIn: 'root'
})
export class PropownerService {

  constructor(private http: HttpClient) { }

  createPropOwner(propOwner: any): Observable<any> {
    return this.http.post(baseUrl, propOwner);
  }

}

