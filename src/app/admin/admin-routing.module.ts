import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { NavComponent } from "./components/nav/nav.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InventarioComponent } from "./components/inventario/inventario.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { FormProductComponent } from "./components/form-product/form-product.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { FormEditProductComponent } from "./components/form-edit-product/form-edit-product.component";

const routes: Routes = [
  {
    path: "",
    component: NavComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "create",
        component: ProductFormComponent
      },
      {
        path: "inventario",
        component: InventarioComponent
      },
      {
        path: "products",
        component: ProductsListComponent
      },
      {
        path: "products/create",
        component: FormProductComponent
      },
      {
        path: "products/edit/:id",
        component: FormEditProductComponent
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
