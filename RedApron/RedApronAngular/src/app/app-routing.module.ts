import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeMainViewComponent } from './SingleRecipe/MainView/recipe-main-view/recipe-main-view.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './LandingPage/landing-page/landing-page.component';
import { BrowseCategoryComponent } from './browse/browse-category/browse-category.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';
import { CategoryMainComponent } from './browse/category-main/category-main.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutPageComponent} from './cart/checkout/checkout-page/checkout-page.component';
import { UserTransactionsComponent } from './User/user-transactions/user-transactions.component';
import { UserUpdateComponent } from './User/user-update/user-update.component';
import { BmiCalculatorComponent } from './navbar/bmi-calculator/bmi-calculator.component';



const routes: Routes = [
  {path: '', component : LandingPageComponent},
  {path: 'contact-form', component: LandingPageComponent},
  {path: 'home', component: LandingPageComponent},
  {path: 'browse/recipeMainView', component : RecipeMainViewComponent},
  {path: 'browse/categoryMain', component :CategoryMainComponent},
  {path: 'browse', component :BrowseCategoryComponent},
  {path: 'recipeMainView', component : RecipeMainViewComponent},
  {path: 'userLogin', component: UserLoginComponent},
  {path: 'userRegister', component: UserRegisterComponent}, 
  {path: 'userProfile', component: UserProfileComponent},
  {path: 'cart', component :CartComponent},
  {path: 'checkout', component: CheckoutPageComponent},
  {path: 'userTransactions', component: UserTransactionsComponent},
  {path: 'bmiCalculator', component: BmiCalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
