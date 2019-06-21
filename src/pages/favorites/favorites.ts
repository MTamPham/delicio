import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Recipe } from '../../data-model/recipe';

import { FavoritesProvider } from '../../providers/favorites/favorites';

import { HomePage } from '../../pages/home/home';
import { RecipeDetailPage } from '../../pages/recipe-detail/recipe-detail';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  recipeList: Recipe[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public favoritesProvider: FavoritesProvider) {
  	
  	// get favorite recipe from mobile storage using provider
  	this.favoritesProvider.getAllFavorites().then(result => {
      if (result) {
        this.recipeList = result;
      }
    });
  }

  /*
  * go back to home page
  */
  public goToHome() {
    this.navCtrl.setRoot(HomePage);
  }

  /*
  * go to recipe detail page when user clicks a recipe
  */
  public goToRecipeDetail(selectedRecipe : Recipe) {
    this.navCtrl.setRoot(RecipeDetailPage, {backToFavorite: true, recipeRecord: selectedRecipe});
  }

}
