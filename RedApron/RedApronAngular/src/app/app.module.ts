import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



import {CategoryService} from './service/category.service';
import {RecipeService} from './service/recipe.service';

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
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CategoryMainComponent } from './category-main/category-main.component';

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
    NavbarComponent,
    CategoryMainComponent,
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
    FormsModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    CategoryService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
