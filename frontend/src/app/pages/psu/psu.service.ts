import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Psu } from './psu.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PsuService {
  private apiUrl = environment.apiUrl + '/psu';

  constructor(private httpClient: HttpClient) {}

  getAllPsus(): Observable<Psu[]> {
    return this.httpClient.get<Psu[]>(this.apiUrl);
  }

  getPsuById(id: string): Observable<Psu> {
    return this.httpClient.get<Psu>(`${this.apiUrl}/${id}`);
  }

  createPsu(psu: Psu): Observable<Psu> {
    return this.httpClient.post<Psu>(this.apiUrl, psu);
  }

  updatePsu(id: string, psu: Partial<Psu>): Observable<Psu> {
    return this.httpClient.put<Psu>(`${this.apiUrl}/${id}`, psu);
  }

  deletePsu(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}