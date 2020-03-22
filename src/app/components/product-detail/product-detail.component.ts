import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "src/app/core/services/products/products.service";
import { Product } from "src/app/interfaces/product.model";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  product: Product;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productsService.getProduct(id);
    });
  }
}
