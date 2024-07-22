import { Component,OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  
})
export class SkillsComponent  implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleIcon(event: any): void {
    const button = event.currentTarget;
    const icon = button.querySelector('.toggle-icon');
    if (button.classList.contains('collapsed')) {
      icon.textContent = '+';
    } else {
      icon.textContent = '-';
    }
  }
}
