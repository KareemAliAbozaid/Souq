import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { FormsModule } from '@angular/forms';
import { Icategory } from '../../Models/icategory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductsComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  categories: Icategory[];
  SelectCatId: number = 0;
  recievedTotPrice: number = 0;
  constructor() {
    this.categories = [
      { Id: 1, name: "Chimistry" },
      { Id: 2, name: "Math" },
      { Id: 3, name: "Adventure" }
    ]

  }
  calcTotPrice(TotOrdPric: number) {

    this.recievedTotPrice = TotOrdPric

  }
}
