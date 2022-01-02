import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-flyin',
  templateUrl: './flyin.component.html',
  styleUrls: ['./flyin.component.css'],
  animations: [
    trigger('flyTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(-25%)' , opacity : 0}),
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity : 1, transform : 'none'})),
      ]),
      transition(':leave', [
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(25%)', opacity : 0 })),
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
