import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Project {
  title: string;
  link: string;
  image: string;
  description: string;
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
      title: 'Front End',
      link: 'https://example.com/coding-achievements',
      image: '../../../assets/images/angular_article.png',
      description: 'Explore my front-end development projects showcasing modern design and user experience.',
      hovered: false
    },
    {
      title: 'Back End',
      link: 'https://example.com/hackathon-achievements',
      image: '../../../assets/images/nodejs-dev-1.png',
      description: 'Discover my back-end projects that emphasize server-side logic and database management.',
      hovered: false
    },
    {
      title: 'Fullstack',
      link: 'https://example.com/extracurricular-achievements',
      image: '../../../assets/images/able-mean-stack-developers.jpg',
      description: 'Check out my full-stack projects integrating front-end and back-end technologies seamlessly.',
      hovered: false
    }
  ];

  toggleHover(index: number) {
    this.projects[index].hovered = !this.projects[index].hovered;
  }
}
