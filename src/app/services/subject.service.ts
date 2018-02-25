import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SubjectService {

  constructor() { }

   private subject = new Subject<any>();
   sendmessage(message: any) {
     this.subject.next({data: message});
   }
   clearMessage() {
     this.subject.next();
   }
   getMessage(): Observable<any> {
     return this.subject.asObservable();
   }

}
