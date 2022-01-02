import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlyinComponent } from './components/flyin/flyin.component';
import { KeyframeComponent } from './components/keyframe/keyframe.component';

@NgModule({
  declarations: [
    AppComponent,
    FlyinComponent,
    KeyframeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
