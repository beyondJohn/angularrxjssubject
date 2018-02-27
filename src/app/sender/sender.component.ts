import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor(
    private _subject: SubjectService
  ) { }
  adder: number = 0;
  ngOnInit() {
    
  }
  btn() {
    this.adder++;
    this._subject.sendmessage({text:"from sender " + this.adder, data: {id:2, name: "Adrian"}} );
  }
  btnobj() {
    this._subject.sendmessage({text:'hello', data: {id:1, name: "JP"}});
  }
}
