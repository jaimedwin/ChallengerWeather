import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Weather } from '../weather';
import { WeathersService } from '../weathers.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form!: FormGroup

  weather!: Weather

  private weatherId: string | null = "";

  constructor(
    public weathersService: WeathersService,
    private router: Router,
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    this.weatherId = this.route.snapshot.paramMap.get('weatherId')
    this.getDetails(this.weatherId)
  }

  getDetails(id: string | null): void {
    this.weathersService.find(id).subscribe(res => this.weather = res)
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.weathersService.update(this.weatherId, this.weather).subscribe(res => {
      console.log('Weather updated successfully!');
      this.router.navigateByUrl('weathers/index');
    })
  }

}
