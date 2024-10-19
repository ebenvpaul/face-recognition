import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private apiUrl = 'https://localhost:5001/api/attendance';

  constructor(private http: HttpClient) { }

  checkIn(faceData: any) {
    return this.http.post(`${this.apiUrl}/checkin`, faceData);
  }
}
