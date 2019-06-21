import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeListingPage } from './recipe-listing';

@NgModule({
  declarations: [
    RecipeListingPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeListingPage),
  ],
})
export class RecipeListingPageModule {}
