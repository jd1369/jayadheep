import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.url);
  }

  addData(item: any) {
    return this.http.post(this.url, item);
  }
  deleteData(id: any) {
    return this.http.delete(this.url , id);
  }
  updateData(item: any): Observable<any> {
    return this.http.put(this.url + item.id, item);
  }
}
