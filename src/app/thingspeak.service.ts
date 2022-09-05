import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThingspeakService {

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * Return readings from vibration sensor.
   * Vibration sensor returns 1 if senses vibration, otherwise 0
   *
   * Example:
   * {
   *       "channel": {
   *           "id": 1846905,
   *           "name": "IOT-CAR",
   *           "latitude": "0.0",
   *           "longitude": "0.0",
   *           "field1": "Field Label 1",
   *           "field2": "Field Label 2",
   *           "created_at": "2022-09-01T04:11:13Z",
   *           "updated_at": "2022-09-04T01:11:02Z",
   *           "last_entry_id": 9764
   *       },
   *       "feeds": [
   *           {
   *               "created_at": "2022-09-04T20:56:25Z",
   *               "entry_id": 9763,
   *               "field1": "1"
   *           },
   *           {
   *               "created_at": "2022-09-04T20:56:49Z",
   *               "entry_id": 9764,
   *               "field1": "1"
   *           }
   *       ]
   *   }
   * @param feedSize contains the size of readings that will return in the response
   */
  getVibrationReadings(feedSize: number): Observable<any> {

    const CHANNEL_ID = '1846905';
    let url = `https://api.thingspeak.com/channels/${CHANNEL_ID}/fields/1.json`;
    url = url + `?results=` + feedSize;

    return this.http.get<any>(url);
  }

  /**
   * Return readings from vibration sensor.
   * Revolutions sensor expressed in revolutions/min
   *
   * Example:
   * {
   *       "channel": {
   *           "id": 1846905,
   *           "name": "IOT-CAR",
   *           "latitude": "0.0",
   *           "longitude": "0.0",
   *           "field1": "Field Label 1",
   *           "field2": "Field Label 2",
   *           "created_at": "2022-09-01T04:11:13Z",
   *           "updated_at": "2022-09-04T01:11:02Z",
   *           "last_entry_id": 9772
   *       },
   *       "feeds": [
   *           {
   *               "created_at": "2022-09-04T20:59:37Z",
   *               "entry_id": 9771,
   *               "field2": "0"
   *           },
   *           {
   *               "created_at": "2022-09-04T21:00:03Z",
   *               "entry_id": 9772,
   *               "field2": "0"
   *           }
   *       ]
   *   }
   *
   * @param feedSize contains the size of readings that will return in the response
   */
  getHallReadings(feedSize: number): Observable<any> {

    const CHANNEL_ID = '1846905';
    let url = `https://api.thingspeak.com/channels/${CHANNEL_ID}/fields/2.json`;
    url = url + `?results=` + feedSize;

    return this.http.get<any>(url);
  }
}
