import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApprenantComponent } from './apprenant/apprenant.component';

const routes: Routes = [
 
  {path:"login",component:LoginComponent},
  {path:"apprenant",component:ApprenantComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
