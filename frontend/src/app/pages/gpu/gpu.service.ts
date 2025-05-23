// src/gpu/gpu.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gpu } from './gpu.interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GpuService {
  private apiUrl = environment.apiUrl + '/gpu';

  constructor(private http: HttpClient) {}

  getAllGpus(): Observable<Gpu[]> {
    return this.http.get<Gpu[]>(this.apiUrl);
  }

  createGpu(gpu: Partial<Gpu>): Observable<Gpu> {
    return this.http.post<Gpu>(this.apiUrl, gpu);
  }

  updateGpu(id: string, gpu: Partial<Gpu>): Observable<Gpu> {
    return this.http.put<Gpu>(`${this.apiUrl}/${id}`, gpu);
  }

  deleteGpu(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}