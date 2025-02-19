import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../../Services/product-service.service';
import { Iproduct } from '../../Models/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  currentId: number = 0;
  product: Iproduct | null = null;
  arrId: number[]

  constructor(private _actvatedroute: ActivatedRoute,
    private _productservice: ProductServiceService,
    private _location: Location,
    private _router: Router
  ) {
    this.arrId = this._productservice.mapProdToIds();
  }
  ngOnInit(): void {
    this._actvatedroute.paramMap.subscribe((paramMap) => {
      this.currentId = Number(paramMap.get('id'))
      this.product = this._productservice.getProductById(this.currentId);
    })

  }
  Back() {
    this._location.back();
  }

  gONext() {
    let ProdIndex = this.arrId.findIndex((id) => id == this.currentId)
    if (ProdIndex != this.arrId.length - 1) {
      this._router.navigateByUrl(`/Details/${this.arrId[ProdIndex + 1]}`)
    }

  }
  backPre() {
    let ProdIndex = this.arrId.findIndex((id) => id == this.currentId)
    if (ProdIndex != 0) {
      this._router.navigateByUrl(`/Details/${this.arrId[ProdIndex - 1]}`)
    }
  }
}
