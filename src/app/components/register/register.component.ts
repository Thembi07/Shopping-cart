import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email = ''
  password = ''
  constructor(
    private route: Router,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  async register() {
    if (this.email != '' || this.password != '') {
      await this.afAuth.createUserWithEmailAndPassword(this.email, this.password).then((success) => {
        console.log(success);
        this.route.navigateByUrl('productList');
      }).catch((error) => {
        console.log(error);
      })
    }
  }
  login(){
    this.route.navigateByUrl('login');
  }
}
