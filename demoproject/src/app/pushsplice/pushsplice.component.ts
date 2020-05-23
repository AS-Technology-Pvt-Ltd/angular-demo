import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pushsplice',
  templateUrl: './pushsplice.component.html',
  styleUrls: ['./pushsplice.component.css'],
})
export class PushspliceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  users = [];
  addUser(uName) {
    this.users.push({ name: uName.value });
  }
  deleteuser(i) {
    this.users.splice(i, 1);
  }
}
