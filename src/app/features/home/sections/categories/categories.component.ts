import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  categories = [
    { label: 'Tops', slug: 'tops', icon: 'fas fa-tshirt' },
    { label: 'Dresses', slug: 'dresses', icon: 'fas fa-female' },
    { label: 'Bottoms', slug: 'bottoms', icon: 'fas fa-ruler-horizontal' },
    { label: 'Sets', slug: 'sets', icon: 'fas fa-layer-group' },
    { label: 'Outerwear', slug: 'outerwear', icon: 'fas fa-wind' },
  ];
}
