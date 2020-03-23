import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/core/services/products/products.service";
import { Product } from "src/app/interfaces/product.model";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"]
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ["id", "title", "price", "actions"];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string, index: number) {
    this.productsService.deleteProduct(id).subscribe(rta => {
      if (rta) {
        this.products.slice(index, 1);
      }
    });
  }
}
