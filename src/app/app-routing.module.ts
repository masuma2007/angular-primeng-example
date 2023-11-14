import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import {ChildAppComponent} from './app.childApp';
import{AaComponent} from './aa.component';
import { DeerComponent } from './deer.component';
const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'child', component: ChildAppComponent },
  {path:'aa', component:AaComponent},
  {path:'deer', component:DeerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
