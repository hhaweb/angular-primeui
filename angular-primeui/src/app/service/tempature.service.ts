import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class TempatureService {
  constructor(private http: HttpClient) {}

  getTempatureData(): Observable<any> {
    return this.http.get("http://localhost:8083/api/tempature");
  }

  getLatestTempatureData(count: number): Observable<any> {
    return this.http.get(
      "http://localhost:8083/api/latestTempature/" + `${count}`
    );
  }
}
