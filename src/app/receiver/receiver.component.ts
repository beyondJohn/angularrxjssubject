import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnDestroy, OnInit {

  constructor(
    private _subject: SubjectService
  ) { }
  message: any;
  subscription: Subscription;
  ngOnInit() {
    this.subscription = this._subject.getMessage().subscribe(
      message => {
        if(message.data.text == "hello"){
          this.message = "id: "+ message.data.data.id;
        }
        else if(message.data.text.indexOf("from sender") != '-1' )
        {
          this.message = message.data.text + ": " +  message.data.data.name;
        }
      });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
