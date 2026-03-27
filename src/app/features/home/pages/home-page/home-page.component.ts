import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { FeaturedComponent } from '../../sections/featured/featured.component';
import { CategoriesComponent } from '../../sections/categories/categories.component';
import { AboutComponent } from '../../sections/about/about.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, FeaturedComponent, CategoriesComponent, AboutComponent],
  template: `
    <app-hero />
    <app-featured />
    <app-categories />
    <app-about />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
