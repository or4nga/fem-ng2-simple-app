import {Injectable} from '@angular/core';
import {Config} from './config.model';

@Injectable()
export class StateService {
	private _message = 'Hello Message';
  superGreeting: string = 'Hello world';
  config: Config = {
      name: 'Test message',
      description: 'Description'
  }
  getMessage(): string {
    return this._message;
  };

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };
}
