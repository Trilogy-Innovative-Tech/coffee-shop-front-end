import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateAccountComponent} from "./create-account/create-account.component";
import {SignInComponent} from "./sign-in/sign-in.component";

const routes: Routes = [{
  path: 'sign-up',
  component: CreateAccountComponent
},
  {
    path: '',
    component: SignInComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
