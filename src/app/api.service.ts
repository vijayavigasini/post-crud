import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { datamodel } from './register/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  private apiUrl = 'http://localhost:3000/posts/';
  
  constructor(private http: HttpClient) {} // Inject HttpClient here

  addpeople(data: datamodel) { 
  return this.http.post<datamodel>("http://localhost:3000/posts", data);
  }

  getpeople(){
    return this.http.get<datamodel[]>("http://localhost:3000/posts");
  }
  deletepeople(id:number){
    return this.http.delete<datamodel>("http://localhost:3000/posts/"+id);
  }
  fetchdata(id:number){
    return this.http.get<datamodel>("http://localhost:3000/posts/"+id);
  }
  updateemployee(data:datamodel,id:number){
    return this.http.put<datamodel>("http://localhost:3000/posts/"+id,data);
  }
  deletePerson(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
