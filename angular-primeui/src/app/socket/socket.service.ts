import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { Observable, interval } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SocketService {
  socket: any;
  constructor(private http: HttpClient) {
    //this.socket = io("http://localhost:8082/");
  }

  listen(Eventname: string) {
    return new Observable(subscriber => {
      this.socket.on(Eventname, data => {
        subscriber.next(data);
      });
    });
  }

  getRealTimeData(): Observable<any> {
    return this.http.get(
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=P3BLQZCZ8XWQBNH7"
    );
  }

  getT3Data(): Observable<any> {
    return this.http.get(
      "https://www.alphavantage.co/query?function=T3&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=44RG0647M4SSZPK4"
    );
  }
}
