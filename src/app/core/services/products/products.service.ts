import { Injectable } from "@angular/core";
import { Product } from "../../../interfaces/product.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { catchError,map } from "rxjs/operators"
import { Observable, throwError } from 'rxjs';
import * as Sentry from "@sentry/browser";


interface User {
  email:string;
  phone:String;
}

@Injectable({
  providedIn: "root"
})

export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getFile(){
    return this.http.get("assets/archivo.pdf", {responseType:'blob'})
  }

  getRandomUsers():Observable<User[]>{
    return this.http.get("https://randomuser.me/api?results=2").pipe(
      catchError(this.handleError),
      map((response:any) => response.results as User[])
    )
  }

  private handleError(error:HttpErrorResponse){
    Sentry.captureException(error)
    return throwError("Ups, algo salio mal")
  }
}
