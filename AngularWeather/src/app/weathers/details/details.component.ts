import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Weather } from '../weather';
import { WeathersService } from '../weathers.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  weather!: Weather

  private weatherId: string | null = "";

  constructor(
    private route: ActivatedRoute,
    private weathersService: WeathersService,
    public authService : AuthService) { }

  ngOnInit(): void {
    this.weatherId = this.route.snapshot.paramMap.get('weatherId')
    this.getDetails(this.weatherId)
  }

  getDetails(id: string | null): void {
    this.weathersService.find(id).subscribe(res => this.weather = res)
  }

}
