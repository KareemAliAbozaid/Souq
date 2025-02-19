import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductsComponent } from './Components/products/products.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { VisionComponent } from './Components/vision/vision.component';
import { ValuesComponent } from './Components/values/values.component';

export const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Products', component: ProductsComponent },
    { path: 'Orders', component: OrdersComponent },
    {
        path: 'About', component: AboutUsComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: 'Vision' },
            { path: 'Vision', component: VisionComponent },
            { path: 'Values', component: ValuesComponent }
        ]
    },
    { path: '**', component: NotFoundComponent },
];
