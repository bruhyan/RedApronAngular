import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeMainViewComponent } from './SingleRecipe/MainView/recipe-main-view/recipe-main-view.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './LandingPage/landing-page/landing-page.component';
import { BrowseCategoryComponent } from './browse/browse-category/browse-category.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';


const routes: Routes = [
  {path: '', component : LandingPageComponent},
  {path: 'home', component: LandingPageComponent},
  {path: 'recipeMainView', component : RecipeMainViewComponent},
  {path: 'browse', component :BrowseCategoryComponent},
  {path: 'userLogin', component: UserLoginComponent},
  {path: 'userRegister', component: UserRegisterComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
