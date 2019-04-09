import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const GET_NAME_URL = 'http://localhost:8080/getName';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(private http: HttpClient)  { }

  getName(): Observable<string> {
    return this.http.get<string>(GET_NAME_URL);
  }
}
