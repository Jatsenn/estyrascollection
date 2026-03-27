import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../../../shop/data/products';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedComponent {
  featured: Product[] = PRODUCTS.filter((p: Product) => p.isNew).slice(0, 4);
}
