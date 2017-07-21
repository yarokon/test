import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdListModule, MdIconModule } from '@angular/material';


export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCG1iYPdpWxmdJjpBhHHU3LjqYJsJFRx3M',
    authDomain: 'angular-http-70bc8.firebaseapp.com',
    databaseURL: 'https://angular-http-70bc8.firebaseio.com',
    projectId: 'angular-http-70bc8',
    storageBucket: 'angular-http-70bc8.appspot.com',
    messagingSenderId: '604374463712'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdListModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
