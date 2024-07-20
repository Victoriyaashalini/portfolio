import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Project {
  fronttitle: string;
  link: string;
  backtitle:string,
  image: string;
  frontdescription: string;
  backdescription: string;

  hovered: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      fronttitle: 'Front end',
      backtitle:'Tour Experts',
      link: 'https://tourexperrts.netlify.app',
      image: '../../../assets/images/angular_article.png',
      frontdescription: 'Explore my front-end development projects showcasing modern design and user experience.',
      backdescription: 'Explore my front-end development projects showcasing modern design and user experience.',
      hovered: false
    },
    {
      fronttitle: 'Back end',
      backtitle:'Health care Management system',
      link: 'https://tourexperrts.netlify.app',
      image: '../../../assets/images/nodejs-dev-1.png',
      frontdescription: 'Explore Backend projects showcasing modern design and user experience.',
      backdescription: 'Explore my front-end development projects showcasing modern design and user experience.',
      hovered: false
    },
    {
      fronttitle: 'Full stack',
      backtitle:'PawfectCare',
      link: 'https://pawfectcare.netlify.app/',
      image: '../../../assets/images/able-mean-stack-developers.jpg',
      frontdescription: 'Explore Full stack projects showcasing modern design and user experience.',
      backdescription: 'Explore my front-end development projects showcasing modern design and user experience.',
      hovered: false
    }
  ];

  toggleHover(index: number) {
    this.projects[index].hovered = !this.projects[index].hovered;
  }
}
