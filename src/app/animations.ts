import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [

    transition(':enter', [

        style({ opacity: 0 }),

        animate('0.5s ease-out', style({ opacity: 1 }))
    ]),
]);

export const fadeOut = trigger('fadeOut', [

    transition(':leave', [

        animate('0.5s ease-out', style({ opacity: 0 }))
    ]),
]);