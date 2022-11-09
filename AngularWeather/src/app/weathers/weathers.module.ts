import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeathersRoutingModule } from './weathers-routing.module';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    WeathersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class WeathersModule { }
