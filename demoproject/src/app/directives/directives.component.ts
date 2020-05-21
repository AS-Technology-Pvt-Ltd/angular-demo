import { Component, OnInit } from '@angular/core';
/*
1. form -->Name,email,password,gender,contact,address,country,city, hobbies,photo

*/
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  isActive: boolean = true;
  enabled: boolean = false;
  toggle() {
    this.isActive = !this.isActive;
  }
}
