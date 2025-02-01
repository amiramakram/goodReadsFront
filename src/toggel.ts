import { trigger, state, style, animate, transition } from '@angular/animations';

export const toggleAnimation = trigger('toggleAnimation', [
  state('void', style({
    opacity: 0
  })),
  state('*', style({
    opacity: 1
  })),
  transition('void <=> *', animate('500ms ease-in-out'))
]);