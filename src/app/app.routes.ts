import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page/home-page.component').then(m => m.HomePageComponent),
  },
  {
    path: 'shop',
    loadComponent: () =>
      import('./features/shop/pages/shop-page/shop-page.component').then(m => m.ShopPageComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/pages/contact-page/contact-page.component').then(m => m.ContactPageComponent),
  },
  { path: '**', redirectTo: '' },
];
