import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPostByUserId(): Observable<any> {
    let param1 = new HttpParams().set('userId', '1');
    return this._http.get('https://jsonplaceholder.typicode.com/posts', {params: param1});
  }

}
