import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class BookService {
  data = 'http://localhost:3000/posts';
  lend = 'http://localhost:3000/lend';
  
  constructor(private http: HttpClient) {}

  updateBook(id: any, input: any) {
    return this.http.patch(`${this.data}/${id}`, input);
  }

  getBooks(): Observable<any> {
    return this.http.get(`${this.data}`);
  }

  getBook(id: any): Observable<any> {
    return this.http.get(`${this.data}/${id}`);
  }

  deleteBook(id: any): Observable<any> {
    return this.http.delete(`${this.data}/${id}`);
  }

  lendBook(input: any): Observable<any> {
    return this.http.post<any>(`${this.lend}`, input);
  }

  postBook(input: string): Observable<any> {
    return this.http.post<any>(`${this.data}`, input);
  }
}
