import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Iproduct[];
  constructor() {
    this.products = [
      {
        Id: 1,
        name: "15 Day Resell Rights Success",
        price: 1500,
        quantity: 0,
        imgUrl: 'assets/images/15 Day Resell Rights Success.png',
        catId: 1
      },
      {
        Id: 2,
        name: "AdSense Secrets Unleashed Module 2",
        price: 150,
        quantity: 5,
        imgUrl: 'assets/images/AdSense Secrets Unleashed Module 2.png',
        catId: 1
      },
      {
        Id: 3
        , name: "Chemistry Experiments For Children",
        price: 1500,
        quantity: 0,
        imgUrl: 'assets/images/Chemistry Experiments For Children.jpg',
        catId: 2
      },
      {
        Id: 4,
        name: "Chemistry Workbook For Dummies",
        price: 1500,
        quantity: 5,
        imgUrl: 'assets/images/Chemistry Workbook For Dummies.jpg',
        catId: 2
      },
      {
        Id: 5,
        name: "Essentials Of Inorganic Chemistry",
        price: 1500,
        quantity: 0,
        imgUrl: 'assets/images/Essentials Of Inorganic Chemistry.jpg',
        catId: 3
      },
      {
        Id: 6,
        name: "Good To Great",
        price: 1500,
        quantity: 5,
        imgUrl: 'assets/images/Good To Great.jpg',
        catId: 3
      },
      {
        Id: 7,
        name: "Organic Chemistry II For Dummies",
        price: 1500, quantity: 1,
        imgUrl: 'assets/images/Organic Chemistry II For Dummies.jpg',
        catId: 3
      },
      {
        Id: 8,
        name: "Solving Problems A Chemistry Handbook",
        price: 1500,
        quantity: 5,
        imgUrl: 'assets/images/Solving Problems A Chemistry Handbook.jpg',
        catId: 1
      }
    ]
  }
  getAllProduct(): Iproduct[] {
    return this.products
  }
  getProductById(id: number): Iproduct | null {
    let foundPro = this.products.find((prd) => prd.Id == id);
    return foundPro ? foundPro : null
  }
  getProductCatId(catId: number): Iproduct[] {
    if (catId == 0) {
      return this.products
    }
    else {
      return this.products.filter((prd) => prd.catId == catId)
    }
  }
  mapProdToIds(): number[] {
    return this.products.map((prd) => prd.Id)
  }

}
