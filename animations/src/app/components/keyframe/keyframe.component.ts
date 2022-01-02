import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-keyframe',
  templateUrl: './keyframe.component.html',
  styleUrls: ['./keyframe.component.css'],
  animations: [
    trigger('slideStatus', [
      state('active', style({ backgroundColor: 'green' })),
      state('inactive', style({ backgroundColor: 'red' })),

      transition('inactive => active', [
        animate(
          '2s',
          keyframes([
            style({ backgroundColor: 'red' }),
            style({ backgroundColor: 'yellow' }),
            style({ backgroundColor: 'green' }),
          ])
        ),
      ]),

      transition('active => inactive', [
        animate(
          '2s',
          keyframes([
            style({ backgroundColor: 'green' }),
            style({ backgroundColor: 'yellow' }),
            style({ backgroundColor: 'red' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class KeyframeComponent implements OnInit {
  status: 'active' | 'inactive' = 'inactive';

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    if (this.status === 'inactive') {
      this.status = 'active';
    } else {
      this.status = 'inactive';
    }
  }
}
