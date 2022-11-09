import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { WeathersService } from '../weathers.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  form!: FormGroup;

  constructor(
    public weathersService: WeathersService,
    private router: Router,
    public authService : AuthService
  ) {
    this.form = new FormGroup({
      Precipitation: new FormControl('', Validators.required),
      Humidity: new FormControl('', Validators.required),
      Wind: new FormControl('', Validators.required),
      Date: new FormControl('', Validators.required),
      CityID: new FormControl('', Validators.required),
      UserID: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.weathersService.create(this.form.value).subscribe(res => {
      console.log('Weather created successfully!');
      this.router.navigateByUrl('weathers/index').then(() => {
        window.location.reload();
      });
    })
  }
}
