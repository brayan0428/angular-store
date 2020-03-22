import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/interfaces/product.model";
import { ProductsService } from "src/app/core/services/products/products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }

  clickProduct(id) {
    console.log("Product clicked parent: " + id);
  }
}
