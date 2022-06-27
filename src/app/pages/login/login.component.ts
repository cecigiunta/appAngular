import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
   ) {
      this.myForm = this.fb.group({
        email: ["", [Validators.required]],
        password: ["", [Validators.required]]
      })
    }
 
  ngOnInit(): void {
  }

  ingresar () {
    this.auth.authenticate()
 
  }

}
