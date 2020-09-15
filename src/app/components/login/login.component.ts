import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = ''
  password = ''
  constructor(
    private route: Router,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }


  async login() {
    if (this.email != '' || this.password != '') {
      await this.afAuth.signInWithEmailAndPassword(this.email, this.password).then((success) => {
        console.log(success);
        this.route.navigateByUrl('productList');
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  register() {
    this.route.navigateByUrl('register');
  }

  async  loginWithFacebook() {
    await this.afAuth.signInWithPopup(new auth.FacebookAuthProvider()).then((success)=>{
      console.log(success);
      this.route.navigateByUrl('productList');
    }).catch((error)=>{
      console.log(error);
    })
  }

  async loginWithGoogle() {
    await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then((success) => {
      console.log(success);
      this.route.navigateByUrl('productList');
    }).catch((error) => {
      console.log(error);
    })
  }

  phone(){
    this.route.navigateByUrl('phone');
  }
}
