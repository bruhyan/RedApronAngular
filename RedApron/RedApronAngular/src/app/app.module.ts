import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeMainViewComponent } from './SingleRecipe/MainView/recipe-main-view/recipe-main-view.component';
import { RecipeMainContentComponent } from './SingleRecipe/MainContent/recipe-main-content/recipe-main-content.component';
import { RecipeInstructionsComponent } from './SingleRecipe/Instructions/recipe-instructions/recipe-instructions.component';
import { RecipeReviewsComponent } from './SingleRecipe/Reviews/recipe-reviews/recipe-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeMainViewComponent,
    RecipeMainContentComponent,
    RecipeInstructionsComponent,
    RecipeReviewsComponent,
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
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
