import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FetchService {
  private http = inject(HttpClient);

  fetch(url: string): Observable<any> {
    return this.http.get(url);
  }
}
