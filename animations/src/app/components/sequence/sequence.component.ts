import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css'],
  animations: [
    trigger('itemsTrigger', [
      transition(
        ':enter',
        query('.item', [
          style({ width: '0%' }),
          stagger(300, [
            animate(
              '500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ width: '100%' })
            ),
          ]),
        ])
      ),

      transition(
        ':leave',
        query('.item', [
          stagger(300, [
            animate(
              '500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ width: '0px' })
            ),
          ]),
        ])
      ),
    ]),
  ],
})
export class SequenceComponent implements OnInit {
  isShown = false;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isShown = !this.isShown;
  }
}
