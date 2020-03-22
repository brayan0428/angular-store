import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductsComponent } from "./components/products/products.component";
import { ContactComponent } from "./components/contact/contact.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    ContactComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
