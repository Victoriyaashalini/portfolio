import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {  Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	
		// Default child route
		{ path: 'about', component: AboutComponent },
		{ path: 'projects', component: ProjectsComponent },
		{ path: 'contact', component: ContactComponent }
	 
  ];
  