import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule, Router } from '@angular/router';
import { RecipedetailComponent } from './Component/recipedetail/recipedetail.component';
import { HomeComponent } from './Component/home/home.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: SignInComponent },
    { path: 'register', component: SignUpComponent },
    { path: 'Recipedetail/:id', component: RecipedetailComponent }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { 
  
}
