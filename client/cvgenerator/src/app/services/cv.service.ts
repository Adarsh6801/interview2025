import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  private apiUrl=environment.apiUrl
  constructor(private http:HttpClient) { }
  
  getCvs(page:number,limit:number){
    const params= new HttpParams()
    .set('page',page.toString())
    .set('limit',limit.toString())
    const request=this.http.get<any>(`${this.apiUrl}api/cv`,{params})
    return request
  }
}
