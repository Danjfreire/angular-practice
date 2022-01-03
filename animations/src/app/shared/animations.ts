import {
  query,
  style,
  transition,
  trigger,
  animateChild,
  group,
  animate,
} from '@angular/animations';

export const slideInAnimation = trigger('routerAnimations', [
  transition('HomePage <=> TestPage', [
    style({ position: 'relative' }),
    query(':enter', [
      style({ position: 'absolute', top: 25, left: 25, width: '100%' }),
    ]),
    query(':enter', [style({ left: '200%' })]),
    group([
      query(':enter', [
        animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', style({ left: 25 })),
      ]),
    ]),
  ]),
]);
