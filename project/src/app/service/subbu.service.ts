import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubbuService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private htt: HttpClient) { }
  mailsubmit(mail: any, subject: any, text: any): Observable<any> {
    return this.htt.post('http://localhost:3400/post', { mailid: mail, subi: subject, tex: text }, this.httpOptions)
  }
}
