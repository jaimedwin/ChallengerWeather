import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../weather';
import { WeathersService } from '../weathers.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  weather: Weather = {
    "ID": 0,
    "Precipitation": 0,
    "Humidity": 0,
    "Wind": 0,
    "Date": "",
    "CityID": 0,
    "Status": false,
    "UpdateAt": "",
    "CreateAt": "",
    "DeleteAt": "",
    "UserID": 0,
    "City": {
      "ID": 0,
      "Name": ""
    },
    "User": {
      "Username": ""
    }
  }

  private weatherId: string | null = "";

  constructor(
    private route: ActivatedRoute,
    private weathersService: WeathersService) { }

  ngOnInit(): void {
    this.weatherId = this.route.snapshot.paramMap.get('weatherId')
    this.getDetails(this.weatherId)
  }

  getDetails(id: string | null): void {
    this.weathersService.find(id).subscribe(res => this.weather = res)
  }

}
