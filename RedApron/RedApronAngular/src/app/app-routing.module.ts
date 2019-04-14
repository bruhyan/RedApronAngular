import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeMainViewComponent } from './SingleRecipe/MainView/recipe-main-view/recipe-main-view.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './LandingPage/landing-page/landing-page.component';
import { BrowseCategoryComponent } from './browse/browse-category/browse-category.component';


const routes: Routes = [
  {path: '', component : LandingPageComponent},
  {path: 'home', component: LandingPageComponent},
  {path: 'browse/recipeMainView', component : RecipeMainViewComponent},
  {path: 'browse', component :BrowseCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
