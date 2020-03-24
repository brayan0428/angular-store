import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private af: AngularFireAuth) {}

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
}
