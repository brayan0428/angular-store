import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/services/auth/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
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

  login(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
    if (this.form.valid) {
      this.authService
        .signIn(value.email, value.password)
        .then(() => {
          this.router.navigate(["/admin/dashboard"]);
        })
        .catch(() => {
          alert("Usuario o contraseña invalidos");
        });
    }
  }

  loginApi(){
    this.authService.loginRestApi("prueba@gmail.com","12456").subscribe(res => {
      console.log(res)
    })
  }
}
