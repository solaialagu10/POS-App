import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
@Injectable()
export class EmitterService{
    private subject = new Subject<any>();
    
  sendData(emitterData,name){
    this.subject.next({emitData: emitterData,funcName: name});
  }
  getData(): Observable<any>{
    return this.subject.asObservable();
  }
}