import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AgmCoreModule, AgmMarker, MarkerManager, GoogleMapsAPIWrapper} from '@agm/core';




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
    FooterComponent

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCwJTZPr6Ed_SuPojaVn0-S1CxZ4VwSQGc'
    })
    

  ],
  providers: [MarkerManager,AgmMarker,GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
