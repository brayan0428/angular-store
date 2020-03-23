import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/interfaces/product.model";
import { CartService } from "src/app/core/services/cart/cart.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addCart() {
    this.cartService.addCart(this.product);
  }
}
