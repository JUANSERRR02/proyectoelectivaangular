import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Motherboard } from './motherboards.interfaces';

@Injectable({
  providedIn: 'root',
})
export class MotherboardService {
  private apiUrl = environment.apiUrl + '/motherboards';

  constructor(private httpClient: HttpClient) {}

  getAllMotherboards(): Observable<Motherboard[]> {
    return this.httpClient.get<Motherboard[]>(this.apiUrl);
  }

  getMotherboardById(id: string): Observable<Motherboard> {
    return this.httpClient.get<Motherboard>(`${this.apiUrl}/${id}`);
  }

  createMotherboard(motherboard: Motherboard): Observable<Motherboard> {
    return this.httpClient.post<Motherboard>(this.apiUrl, motherboard);
  }

  updateMotherboard(id: string, motherboard: Partial<Motherboard>): Observable<Motherboard> {
    return this.httpClient.put<Motherboard>(`${this.apiUrl}/${id}`, motherboard);
  }

  deleteMotherboard(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}