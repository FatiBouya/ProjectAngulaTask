import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskEditComponent } from './user/task-edit/task-edit.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'Task', component:UserComponent},
  {path:'home',component:HomeComponent},
  {path:'tasks/:id/edit',component:TaskEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
