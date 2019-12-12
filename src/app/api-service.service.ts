import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/users')
  }

}
