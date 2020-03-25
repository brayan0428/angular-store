import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../token.service';
import { tap } from "rxjs/operators"

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private af: AngularFireAuth, private http:HttpClient, private token:TokenService) {}

  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.af.auth.signOut();
  }

  hasUser() {
    return this.af.authState;
  }

  loginRestApi(email: string, password: string){
    return this.http.post("https://platzi-store.herokuapp.com/auth", {email,password}).pipe(tap((data:any) => {
      const token = data.token
      this.token.saveToken(token)
    }))
  }
}
