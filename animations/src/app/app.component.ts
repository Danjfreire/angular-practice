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
          width: '250px',
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
    trigger('flyTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(-50%)' }),
        animate(150),
      ]),
      transition(':leave', [
        animate(150, style({ transform: 'translateX(50%)' })),
      ]),
    ]),
  ],
})
export class AppComponent {
  isOpen = true;
  isShown = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  toggleFlyComponent() {
    this.isShown = !this.isShown;
  }
}
