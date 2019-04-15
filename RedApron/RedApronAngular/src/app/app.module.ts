import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AgmCoreModule, AgmMarker, MarkerManager, GoogleMapsAPIWrapper } from '@agm/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { CategoryService } from './service/category.service';
import { RecipeService } from './service/recipe.service';
import { UserService } from './service/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeMainViewComponent } from './SingleRecipe/MainView/recipe-main-view/recipe-main-view.component';
import { RecipeMainContentComponent } from './SingleRecipe/MainContent/recipe-main-content/recipe-main-content.component';
import { RecipeInstructionsComponent } from './SingleRecipe/Instructions/recipe-instructions/recipe-instructions.component';
import { RecipeReviewsComponent } from './SingleRecipe/Reviews/recipe-reviews/recipe-reviews.component';
import { BrowseCategoryComponent } from './browse/browse-category/browse-category.component';
import { RecipeCardComponent } from './browse/recipe-card/recipe-card.component';
import { LandingPageComponent } from './LandingPage/landing-page/landing-page.component';
import { IntroductionComponent } from './LandingPage/introduction/introduction.component';
import { HeaderComponent } from './LandingPage/header/header.component';
import { OurServicesComponent } from './LandingPage/our-services/our-services.component';
import { ContactFormComponent } from './LandingPage/contact-form/contact-form.component';
import { GmapComponent } from './LandingPage/gmap/gmap.component';
import { FooterComponent } from './LandingPage/footer/footer.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CategoryMainComponent } from './browse/category-main/category-main.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';
import { CategorySideBarComponent } from './browse/category-side-bar/category-side-bar.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { ProfileSubscriptionsComponent } from './User/profile-subscriptions/profile-subscriptions.component';
import { CartComponent } from './cart/cart.component';
import { CreateSubscriptionMainComponent } from './createSubscriptionPlan/create-subscription-main/create-subscription-main.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeMainViewComponent,
    RecipeMainContentComponent,
    RecipeInstructionsComponent,
    RecipeReviewsComponent,
    BrowseCategoryComponent,
    RecipeCardComponent,
    LandingPageComponent,
    IntroductionComponent,
    HeaderComponent,
    OurServicesComponent,
    ContactFormComponent,
    GmapComponent,
    FooterComponent,

    NavbarComponent,
    CategoryMainComponent,
    UserLoginComponent,
    UserRegisterComponent,
    CategorySideBarComponent,
    UserProfileComponent,
    ProfileSubscriptionsComponent,
    CartComponent,
    CreateSubscriptionMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCwJTZPr6Ed_SuPojaVn0-S1CxZ4VwSQGc'
    })


  ],

  providers: [UserService, RecipeService, CategoryService, MarkerManager, AgmMarker, GoogleMapsAPIWrapper, FormsModule,
    MatPaginatorModule, HttpClientModule, CategoryService, RecipeService, UserService, NgbModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
