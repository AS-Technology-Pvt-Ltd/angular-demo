import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css'],
})
export class TodoappComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  records = []; //existing
  isData = this.records.length ? true : false;
  dataStyle = {
    display: this.isData ? 'block' : 'none',
  };
  addUser(data) {
    data.value.length > 3
      ? this.records.push({
          name: data.value,
        })
      : alert('Please enter at least 5 characters');
    this.isData = this.records.length ? true : false;
  }
  deleteUser(id) {
    this.records.splice(id, 1);
    this.isData = this.records.length ? true : false;
  }
}
