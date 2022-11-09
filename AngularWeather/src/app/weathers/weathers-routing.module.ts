import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../utils/auth.guard';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [  
  { path: 'weathers/index', component: ListComponent, canActivate: [AuthGuard]},
  { path: 'weathers/:weatherId/view', component: DetailsComponent, canActivate: [AuthGuard]},
  { path: 'weathers/create', component: CreateComponent, canActivate: [AuthGuard]},
  { path: 'weathers/:weatherId/edit', component: EditComponent, canActivate: [AuthGuard] } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WeathersRoutingModule { }
