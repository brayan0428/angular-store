import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../../core/services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.builderForm();
  }

  ngOnInit(): void {}

  builderForm() {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  register(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    if (this.form.valid) {
      this.authService.createUser(value.email, value.password).then(() => {
        this.router.navigate(["/admin/"]);
      });
    }
  }
}
