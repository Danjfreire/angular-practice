import {
  animate,
  style,
  transition,
  trigger,
  group,
  keyframes,
  state,
  query,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-parallel',
  templateUrl: './parallel.component.html',
  styleUrls: ['./parallel.component.css'],
  animations: [
    trigger('itemsTrigger', [
      
      transition(':enter', [
        query('.item', [
          style({ width: '0px' }),
          group([
            animate(
              '500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ width: '100%' })
            ),
            animate(
              '1s',
              keyframes([
                style({ backgroundColor: 'red' }),
                style({ backgroundColor: 'yellow' }),
                style({ backgroundColor: 'green' }),
              ])
            ),
          ]),
        ]),
      ]),

      transition(':leave', [
        query('.item', [
          group([
            animate(
              '1s cubic-bezier(0.35, 0, 0.25, 1)',
              style({ width: '0px' })
            ),
            animate(
              '900ms',
              keyframes([
                style({ backgroundColor: 'green' }),
                style({ backgroundColor: 'yellow' }),
                style({ backgroundColor: 'red' }),
              ])
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class ParallelComponent implements OnInit {
  isShown = false;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isShown = !this.isShown;
  }
}
