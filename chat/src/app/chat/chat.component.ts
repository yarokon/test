import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    this.getChatData();
  }

  getChatData() {
    this.messages = this.db.list('chat_messages');
  }

  newMessage(message) {
    message = message.trim();
    message && this.messages.push(message);
  }

  deleteMessages() {
    this.messages.remove();
  }
}
