import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: Http) { }
  sendMessage(message, url) {
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: new Headers({ 'Content-Type': 'application/json' }) });
    if (url) {
      return this.http.post(url, JSON.stringify(message), requestOptions);
    }
    else
      return this.http.post('http://localhost:53472/api/message/save', JSON.stringify(message), requestOptions);
    
  }
}
