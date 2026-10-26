import { Component } from '@angular/core';
import { mockProducts } from '../../mock-data/product-mock';

@Component({
  selector: 'app-home-page-component',
  imports: [],
  templateUrl: './home-page-component.html',
  styleUrl: './home-page-component.scss',
})
export class HomePageComponent {

  products = mockProducts;
}
