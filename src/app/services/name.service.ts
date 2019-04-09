import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {GreetingTarget} from "../model/greeting-target";

const GET_NAME_URL = 'http://localhost:8080/getName';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(private http: HttpClient)  { }

  getName(): Observable<GreetingTarget> {
    return this.http.get<GreetingTarget>(GET_NAME_URL);
  }
}
