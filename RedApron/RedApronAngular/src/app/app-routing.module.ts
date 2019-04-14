import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeMainViewComponent } from './SingleRecipe/MainView/recipe-main-view/recipe-main-view.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', component : RecipeMainViewComponent},
  {path: 'recipeMainView', component : RecipeMainViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
