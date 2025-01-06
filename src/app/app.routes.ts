import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

export const routes: Routes = [

  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'paises',
    children: [
      {
        path: 'by-capital',
        loadComponent: ()=>
          import('./paises/pages/by-capital-page/by-capital-page.component').then(
            (m) => m.ByCapitalPageComponent
          ),
      },
      {
        path: 'by-pais',
        loadComponent: ()=>
          import('./paises/pages/by-pais-page/by-pais-page.component').then(
            (m) => m.ByPaisPageComponent
          ),
      },
      {
        path: 'by-region',
        loadComponent: ()=>
          import('./paises/pages/by-region-page/by-region-page.component').then(
            (m) => m.ByRegionPageComponent
          ),
      },
      {
        path: 'by/:id',
        loadComponent: ()=>
          import('./paises/pages/pais-page/pais-page.component').then(
            (m) => m.PaisPageComponent
          ),
      },
      {
        path: '**',
        loadComponent: ()=>
          import('./paises/pages/by-capital-page/by-capital-page.component').then(
            (m) => m.ByCapitalPageComponent
          ),
      },
    ]

  },
  {
    path: '**',
    redirectTo: 'home'
  }

];
