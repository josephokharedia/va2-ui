import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Message} from './message';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ChatboxService {

  constructor(private httpClient: HttpClient) {
  }

  getChatHistory(): Observable<Message> {
    return null;
  }

  // sendChatMessage(): Observable<any>{
  //   // this.httpClient.post<>("ht")
  // }
}

