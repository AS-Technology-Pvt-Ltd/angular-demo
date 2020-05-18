import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classstylebinding',
  templateUrl: './classstylebinding.component.html',
  styleUrls: ['./classstylebinding.component.css'],
})
export class ClassstylebindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mypro: boolean = false;
  class1: boolean = false;
  isActive: boolean = true;
  box2: boolean = this.isActive ? true : false;
  color: string = this.isActive ? 'green' : 'red';

  multiClass: Object = {
    box1: true,
    box2: this.box2,
    box3: true,
  };
  multiStyle: Object = {
    color: this.color,
    border: '1px solid red',
  };
}
