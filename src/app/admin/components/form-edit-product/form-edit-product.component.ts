import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductsService } from "../../../core/services/products/products.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MyValidators } from "src/app/utils/validators";

@Component({
  selector: "app-form-edit-product",
  templateUrl: "./form-edit-product.component.html",
  styleUrls: ["./form-edit-product.component.scss"]
})
export class FormEditProductComponent implements OnInit {
  form: FormGroup;
  id: string;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ["", [Validators.required]],
      price: ["", [Validators.required, MyValidators.isPriceValid]],
      image: "",
      description: ["", [Validators.required]]
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.productsService
        .updateProduct(this.id, this.form.value)
        .subscribe(newProduct => {
          this.router.navigate(["/admin/products"]);
        });
    }
  }

  get priceField() {
    return this.form.get("price");
  }
}
