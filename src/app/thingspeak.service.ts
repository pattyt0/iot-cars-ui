import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThingspeakService {

  constructor(
    private http: HttpClient
  ) { }

  getFeed(): Observable<any> {

    const CHANNEL_ID = '938801';
    const url = `https://api.thingspeak.com/channels/${CHANNEL_ID}/fields/1.json`;

    return this.http.get<any>(url);


  }

}
