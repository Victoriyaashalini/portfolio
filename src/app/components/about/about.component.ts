import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../skills/skills.component';

interface Country {
	Company: string;
	Position: string;
  Year: string;
}

const COUNTRIES: Country[] = [
	{
		Company: 'Ayshwarya Syndicate Souharda Limited, Bangalore',
		Position: 'Data Entry Specialist',
		Year: 	'2020-22',
	},
  {
		Company: 'Mediawave Technologies, Chennai',
		Position: 'Front end developer(internship)',
		Year: '2023-24',
	},
	
];

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DecimalPipe,CommonModule,SkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
	countries = COUNTRIES;
	downloadCV(): void {
		const link = document.createElement('a');
		link.href = '../../../assets/images/VICTORIYA-SHALINI--A-.pdf';
		link.download = 'Victoriya_Shalini_CV.pdf';
		link.click();
	  }
}
