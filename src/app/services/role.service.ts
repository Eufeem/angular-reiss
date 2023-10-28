import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Role } from '../models/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  url = environment.baseUrl + '/role'

  constructor(private http: HttpClient) { }

  getAllRequest(): Observable<Role[]> {
    return this.http.get<Role[]>(this.url);
  }

  postRequest(role: Role): Observable<Role> {
    return this.http.post<Role>(this.url, role);
  }

  updateRequest(role: Role): Observable<Role> {
    return this.http.put<Role>(this.url, role);
  }

  deleteRequest(idRole: number): Observable<any> {
    return this.http.delete<any>(this.url + `/ ${idRole}`);
  }

  getAllPagesRoles(page: number, size: number): Observable<any> {
    let queryParams = new HttpParams;
    queryParams = queryParams.append('page', page);
    queryParams = queryParams.append('size', size);
    
    return this.http.get<any>(this.url + '/paginas', {params: queryParams});
  }

  getPageableQuery(text: string, page: number, size: number): Observable<any> {
    return this.http.get<any>(this.url + `/pageQuery/${text}/${page}/${size}`);
  }
}
