import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Message} from './message';

@Injectable({
  providedIn: 'root'
})
export class ChatboxService {

  constructor() {
  }

  getChatHistory(): Observable<Message> {
    return null;
  }
}

