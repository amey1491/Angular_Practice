import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchesService {

  constructor() { }

  public GetBatches(){
    return[
      {"Name":"PPA","Duration":"3Months","Fees":20000},
      {"Name":"LB","Duration":"3Months","Fees":20000},
      {"Name":"Python","Duration":"3Months","Fees":20000},
    ]
  }
}
