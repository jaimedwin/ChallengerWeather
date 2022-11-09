import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  errorLogin: boolean = false;

  constructor(
    private authServices : AuthService,
    private router: Router
  ) { 
    this.formLogin = new FormGroup({
      Username: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.authServices.login(this.formLogin.value).subscribe(res => {
      if (res != null) {
        this.authServices.ID = res.ID
        this.authServices.Username = res.Username
        this.authServices.Token = res.Token
        this.router.navigateByUrl('weathers/index');
      }
    },
    (error : any)=> {
      if (error) {
        if (error.status == 400 || error.status == 401) {
          this.errorLogin = true
          this.router.navigateByUrl('login');
        }
      }
    })
  }
}
