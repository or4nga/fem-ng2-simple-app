import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';
import {Config} from '../common/config.model.ts';
import {Users} from '../users/users.component';
import {Widgets} from '../widgets/widgets.component';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  directives: [Users, Widgets]
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  greeting: string;
  message: string;
  config: Config;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
    this.greeting = this._stateService.superGreeting
    this.config = this._stateService.config;
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
