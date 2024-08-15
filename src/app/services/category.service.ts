import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { environment } from '../environment/prod';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }



  getParentCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/parentCategory`);
  }




  getCategoriesByParentId(parentId: number): Observable<Category[]> {

    return this.http.get<Category[]>(`${this.baseUrl}/children/${parentId}`);
  }

}

// this.http->injected into the service class through dependency injection