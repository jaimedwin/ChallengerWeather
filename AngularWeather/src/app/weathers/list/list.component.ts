import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Weather } from '../weather';
import { WeathersService } from '../weathers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  weathers: Weather[] = [];

  constructor(
    private weathersService: WeathersService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.getWeathers()
  }

  async getWeathers() {
    this.weathersService.getAll().subscribe(res => {
      if (res != null) {
        this.weathers = res
        console.log(res)
      }
    })
  }

  deleteWeather(id: number) {
    this.weathersService.delete(id).subscribe()
    window.location.reload();
  }

}
