import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css'],
})
export class EventbindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  status: boolean = false;
  msg: string = 'msg';
  onAddCart(event) {
    console.log(event);
    this.status = !this.status;
    this.msg = event.target.value;

    /*
  min =0
 max=10;
  +1,-1

    */
  }
}
