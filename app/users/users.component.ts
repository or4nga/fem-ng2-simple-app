import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  template: '<h1>We are the champions</h1>'
})
export class Users implements OnInit {
  ngOnInit() {
    console.log('#winning');
  }
}
