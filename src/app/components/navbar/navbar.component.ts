import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('iconAnimation', [
      state('closed', style({
        transform: 'rotate(0deg)'
      })),
      state('open', style({
        transform: 'rotate(45deg)' // Adjust this to your desired cross icon animation
      })),
      transition('closed <=> open', [
        animate('300ms ease-in-out')
      ])
    ]),
    trigger('menuAnimation', [
      state('closed', style({
        height: '0px',
        opacity: 0,
        display: 'none'
      })),
      state('open', style({
        height: '*',
        opacity: 1,
        display: 'block'
      })),
      transition('closed <=> open', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
  
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
