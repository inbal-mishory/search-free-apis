import { Injectable } from '@angular/core';
import {IApisList} from '../models/api.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApisService {

  constructor(private http: HttpClient) { }

  getApisList(): Observable<IApisList> {
      return this.http.get<IApisList>(`https://api.publicapis.org/entries`);
  }
}
