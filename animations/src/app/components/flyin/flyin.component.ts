import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-flyin',
  templateUrl: './flyin.component.html',
  styleUrls: ['./flyin.component.css'],
  animations: [
    trigger('flyTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(-25%)' }),
        animate(150),
      ]),
      transition(':leave', [
        animate(100, style({ transform: 'translateX(25%)' })),
      ]),
    ]),
  ]
})
export class FlyinComponent implements OnInit {

  isShown = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFlyComponent() {
    this.isShown = !this.isShown;
  }

}
