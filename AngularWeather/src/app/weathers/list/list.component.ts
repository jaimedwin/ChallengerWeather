import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeathersService } from '../weathers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  weathers: Weather[] = [];

  constructor(private weathersService: WeathersService) { }

  ngOnInit(): void {
    this.getWeathers()
  }

  getWeathers() {
    this.weathersService.getAll().subscribe(res => this.weathers = res)
  }

  deleteWeather(id: number) {
    this.weathersService.delete(id);
  }

}
