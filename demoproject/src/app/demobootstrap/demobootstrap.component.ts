import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css'],
})
export class DemobootstrapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  result: string = '';
  selector(event) {
    this.result = event.target.value;
  }
  abc = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'BatGirl' },
    { id: 4, name: 'Robin' },
    { id: 5, name: 'Flash' },
  ];
}
