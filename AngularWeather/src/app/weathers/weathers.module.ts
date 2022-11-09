import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeathersRoutingModule } from './weathers-routing.module';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '../utils/authconfig.interceptor';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WeathersRoutingModule
  ]
})
export class WeathersModule { }
