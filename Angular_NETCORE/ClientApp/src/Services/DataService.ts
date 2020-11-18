import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  allPassedData: BehaviorSubject<any> = new BehaviorSubject<any>([]);
      constructor() { }

      storePassedObject(passedData) {
        this.allPassedData.next(passedData);

      }
      // here instead of reterieve like this you can directly subscribe the property in your compoents
      retrievePassedObject() {
        return this.allPassedData;

      }
    
}
