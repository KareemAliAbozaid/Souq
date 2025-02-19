import { Component, EventEmitter, Input, input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { HighLightCardDirective } from '../../Directives/high-light-card.directive';
import { ProductServiceService } from '../../Services/product-service.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, HighLightCardDirective, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {

  products: Iproduct[];
  filteredProducts: Iproduct[];
  TotalPrice: number = 0;
  @Input() recievedCatId: number = 0;
  @Output() onTotalPriceChanged: EventEmitter<number>

  constructor(private _productServiceService: ProductServiceService, private _router: Router) {

    this.products = this._productServiceService.getAllProduct();

    this.filteredProducts = this.products;

    this.onTotalPriceChanged = new EventEmitter<number>();
  }
  ngOnChanges() {
    this.filteredProducts = this._productServiceService.getProductCatId(this.recievedCatId)
  }

  buy(count: string, price: number) {
    this.TotalPrice += +count * price
    this.onTotalPriceChanged.emit(this.TotalPrice)
  }


  // Change() {
  //   this.SelectCatId = 3
  // }
  trackItem(index: number, item: Iproduct) {
    return item.Id
  }
  navigationToDetails(id: number) {
    this._router.navigateByUrl(`/Details/${id}`);
  }
}
