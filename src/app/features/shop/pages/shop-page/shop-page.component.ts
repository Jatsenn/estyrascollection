import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import { Product, Category } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopPageComponent {
  categories: Category[] = CATEGORIES;
  activeCategory = signal('all');

  filtered = computed(() =>
    this.activeCategory() === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === this.activeCategory())
  );

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['category']) this.activeCategory.set(params['category']);
    });
  }

  setCategory(id: string) {
    this.activeCategory.set(id);
  }

  openShopee(url: string) {
    window.open(url, '_blank', 'noopener');
  }
}
