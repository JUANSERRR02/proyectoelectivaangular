import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Cpu } from './cpus.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CpuService {
  private apiUrl = environment.apiUrl + '/cpu';

  constructor(private httpClient: HttpClient) {}

  getAllCpus(): Observable<Cpu[]> {
    return this.httpClient.get<Cpu[]>(this.apiUrl);
  }

  getCpuById(id: string): Observable<Cpu> {
    return this.httpClient.get<Cpu>(`${this.apiUrl}/${id}`);
  }

  createCpu(cpu: Cpu): Observable<Cpu> {
    return this.httpClient.post<Cpu>(this.apiUrl, cpu);
  }

  updateCpu(id: string, cpu: Partial<Cpu>): Observable<Cpu> {
    return this.httpClient.put<Cpu>(`${this.apiUrl}/${id}`, cpu);
  }

  deleteCpu(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}