import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

export class PhoneNumber {
  number: string;
  // area: string;
  // prefix: string;
  // line: string;

  // format phone numbers as E.164
  get e164() {
    const num = this.number;
    return `+${num}`
  }

}
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {


  windowRef: any;

  phoneNumber = new PhoneNumber()

  verificationCode: string;
  constructor(
    private afAuth: AngularFireAuth,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.windowRef = this.windowRef2()
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()
  }
  windowRef2() {
    return window
  }
  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;
    console.log(appVerifier);

    if (appVerifier != undefined) {
      firebase.auth().signInWithPhoneNumber(num, appVerifier)
        .then(result => {

          this.windowRef.confirmationResult = result;

        })
        .catch(error => console.log(error));
    }

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then(result => {

        // this.user = result.user;
        this.route.navigateByUrl('productList');
      })
      .catch(error => console.log(error, "Incorrect code entered?"));
  }
  login() {
    this.route.navigateByUrl('login');
  }
}
