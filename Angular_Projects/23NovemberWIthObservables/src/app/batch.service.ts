import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Batches } from './batches';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
public url = "/batches.json";
  constructor(private http: HttpClient) {

   }
public GetBatches():Observable<Batches[]>{
return this.http.get<Batches[]>(this.url);
}  
}
