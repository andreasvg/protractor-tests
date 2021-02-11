import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:id', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
