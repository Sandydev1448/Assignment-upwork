/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  API_URL = environment.API_URL;
  Posts_url=environment.post_api;
 // key=environment.Key;
  httpOptions = {
    headers: new HttpHeaders({
   //  'X-API-Key':environment.Key,
          'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) { }
    getData(data){
      return this.http.get(this.API_URL+'?page='+data.page+'&results='+data.results+'&seed='+data.seed  );
    }
    getPost(data){
      return this.http.get(this.Posts_url+'?page='+data.page+'&results='+data.results );
    }

}
