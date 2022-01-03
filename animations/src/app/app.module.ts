import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlyinComponent } from './components/flyin/flyin.component';
import { KeyframeComponent } from './components/keyframe/keyframe.component';
import { SequenceComponent } from './components/sequence/sequence.component';
import { ParallelComponent } from './components/parallel/parallel.component';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    FlyinComponent,
    KeyframeComponent,
    SequenceComponent,
    ParallelComponent,
    HomeComponent,
    TestComponent
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
