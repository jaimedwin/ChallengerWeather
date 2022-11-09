import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [  
  { path: 'weathers', redirectTo: 'weathers/index', pathMatch: 'full'},
  { path: 'weathers/index', component: ListComponent },
  { path: 'weathers/:weatherId/view', component: DetailsComponent },
  { path: 'weathers/create', component: CreateComponent },
  { path: 'weathers/:weatherId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WeathersRoutingModule { }
