import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductsService } from "../../../core/services/products/products.service";
import { Router } from "@angular/router";
import { MyValidators } from "src/app/utils/validators";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";
@Component({
  selector: "app-form-product",
  templateUrl: "./form-product.component.html",
  styleUrls: ["./form-product.component.scss"]
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  image$: Observable<any>;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ["", [Validators.required]],
      title: ["", [Validators.required]],
      price: ["", [Validators.required, MyValidators.isPriceValid]],
      image: "",
      description: ["", [Validators.required]]
    });
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const dir = file.name;
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe(url => {
            console.log(url);
            this.form.get("image").setValue(url);
          });
        })
      )
      .subscribe();
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.productsService
        .createProduct(this.form.value)
        .subscribe(newProduct => {
          this.router.navigate(["/admin/products"]);
        });
    }
  }

  get priceField() {
    return this.form.get("price");
  }
}
