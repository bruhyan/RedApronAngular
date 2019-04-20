import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { Module as StripeModule } from 'stripe-angular';

import { NgxStripeModule } from 'ngx-stripe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { CategoryService } from './service/category.service';
import { RecipeService } from './service/recipe.service';
import { UserService } from './service/user.service';
import { SubscriptionPlanService } from './service/subscription-plan.service';
import { ReviewService } from './service/review.service';

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
import { TrackingMapComponent } from './User/profile-subscriptions/tracking-map/tracking-map.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { UserEnquiriesComponent } from './User/user-enquiries/user-enquiries.component';
import { EnquiryAnswerComponent } from './User/user-enquiries/enquiry-answer/enquiry-answer.component';
import { PaymentComponent } from './cart/checkout/payment/payment.component';
import { CheckoutPageComponent } from './cart/checkout/checkout-page/checkout-page.component';
import { ReviewPastRecipesComponent } from './review-past-recipes/review-past-recipes.component';
import { ReviewCreationComponent } from './review-past-recipes/review-creation/review-creation.component';
import { MatSliderModule } from '@angular/material';
import { FilterMainIngredientSideBarComponent } from './browse/filter-main-ingredient-side-bar/filter-main-ingredient-side-bar.component';
import { UserTransactionsComponent } from './User/user-transactions/user-transactions.component';
import { UserUpdateComponent } from './User/user-update/user-update.component';

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
    TrackingMapComponent,
    CartItemComponent,
    UserEnquiriesComponent,
    EnquiryAnswerComponent,
    PaymentComponent,
    CheckoutPageComponent,
    ReviewPastRecipesComponent,
    ReviewCreationComponent,
    FilterMainIngredientSideBarComponent,
    UserTransactionsComponent,
    UserUpdateComponent,
  ],
  imports: [
    ToastrModule.forRoot(),
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
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    MatDialogModule,
    MatSliderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCwJTZPr6Ed_SuPojaVn0-S1CxZ4VwSQGc'
    }),
    StripeModule.forRoot(),
    NgxStripeModule.forRoot("pk_test_9zdHAOReAhqDbLyt9YCHdwsR00XR1sIOST"),
    ReactiveFormsModule


  ],

  providers: [UserService, RecipeService, CategoryService, MarkerManager, AgmMarker, GoogleMapsAPIWrapper, FormsModule,
    MatPaginatorModule, HttpClientModule, CategoryService, ReviewService, SubscriptionPlanService, RecipeService, UserService, NgbModule],
  entryComponents: [EnquiryAnswerComponent, ReviewCreationComponent, PaymentComponent],

  bootstrap: [AppComponent],
  exports: [ReactiveFormsModule]
})
export class AppModule { }
