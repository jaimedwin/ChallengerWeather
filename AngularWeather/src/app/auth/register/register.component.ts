import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formRegister!: FormGroup;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
    this.formRegister = new FormGroup({
      Username: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.formRegister.controls;
  }

  submit() {
    console.log(this.formRegister.value)
    this.authService.register(this.formRegister.value).subscribe(res => {
      if (res != null) {
        this.router.navigateByUrl('login');
      }
    },
      (error: any) => {
        if (error) {
          if (error.status == 400 || error.status == 401) {
            this.router.navigateByUrl('login');
          }
        }
      })
  }

}
