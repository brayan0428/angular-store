import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      },
      {
        path: "products",
        loadChildren: () =>
          import("./product/product.module").then(m => m.ProductModule)
      },
      {
        path: "contact",
        loadChildren: () =>
          import("./contact/contact.module").then(m => m.ContactModule)
      }
    ]
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "**",
    loadChildren: () =>
      import("./page-not-found/page-not-found.module").then(
        m => m.PageNotFoundModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
