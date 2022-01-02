import {
  state,
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('toggleSidebar', [
      state(
        'sidebar-expanded',
        style({
          width: '280px',
          height: '100%',
          backgroundColor: 'coral',
        })
      ),
      state(
        'sidebar-retracted',
        style({
          flex: 0,
          width: '0px',
          height: '100%',
        })
      ),
      transition('sidebar-expanded <=> sidebar-retracted', [animate('0.2s')]),
    ]),
  ],
})
export class AppComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
