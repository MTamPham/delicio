import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Recipe } from '../../data-model/recipe';
import { Ingredient } from '../../data-model/ingredient';

import { HomePage } from '../../pages/home/home';
import { RecipeListingPage } from '../../pages/recipe-listing/recipe-listing';
import { FavoritesPage } from '../../pages/favorites/favorites';

import { IngredientSelectionProvider } from '../../providers/ingredient-selection/ingredient-selection';
import { FavoritesProvider } from '../../providers/favorites/favorites';

/**
 * Generated class for the RecipeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html',
})
export class RecipeDetailPage {

  ingredientParameter : Ingredient = {
    name: undefined,
    imageUrl: undefined,
  }

  recipeParameter : Recipe = {
    key: undefined,
    name: "",
    mainIngredient: undefined,
    ingredients: undefined,
    method: undefined,
    shortDescription: undefined,
    imageUrl: "",
  };

  isFavorite: boolean = false;

  backToFavorite: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public ingredientSelection: IngredientSelectionProvider, public favoritesProvider: FavoritesProvider) {

    // get selected ingredient from provider
    this.ingredientParameter = this.ingredientSelection.getUserSelectedIngredients()[0];

    // get selected recipe from navigation params
    this.recipeParameter = this.navParams.get('recipeRecord');
    
    let ingredients = this.recipeParameter.ingredients;
    // make sure that we have data and have '\n' before splitting
    // otherwise, we keep the original data
    if (this.isNotEmpty(ingredients) && ingredients.indexOf("\n") > -1) {
        this.recipeParameter.ingredients = ingredients.split("\n");
    }
    let method = this.recipeParameter.method;
    if (this.isNotEmpty(this.recipeParameter.method) && method.indexOf("\n") > -1) {
      this.recipeParameter.method = method.split("\n");
    }

    // verify whether the selected recipe is added to favorite or not
    // if yes, we show 'Remove Favorite' button
    // otherwise, we show 'Add Favorite' button
    this.favoritesProvider.isFavorite(this.recipeParameter).then(isFavorite => {
      this.isFavorite = isFavorite;
    });

    // if we get a 'backToFavorite' parameter, we show a button to go back to Favorites Page 
    // (in case user selected the recipe from Favorites Page)
    // otherwise, we show a button to go back to Recipe Lisitng Page
    this.backToFavorite = this.navParams.get('backToFavorite');
  }

  /*
  * check an object is empty or not
  * params obj: a string needs to be checked
  */
  private isNotEmpty(obj: any) {
    if (obj !== undefined && obj !== null && obj !== '') {
      return true;
    }
    return false;
  }

  /*
  * add current recipe into mobile storage then mark it as is favorited
  */
  public addFavorite() {
    this.favoritesProvider.addFavorite(this.recipeParameter).then(() => {
      this.isFavorite = true;
    });
  }

  /*
  * remove current recipe from mobile storage then mark it as is unfavorited
  */
  public removeFavorite() {
    this.favoritesProvider.removeFavorite(this.recipeParameter).then(() => {
      this.isFavorite = false;
    });
  }

  /*
  * go back to home page
  */
  public goToHome() {
    this.navCtrl.setRoot(HomePage);
  }

  /*
  * go back to recipe listing page
  */
  public goToRecipeListing() {
    this.navCtrl.setRoot(RecipeListingPage);
  }

  /*
  * go back to favorites page (in case the recipe is clicked from favorites page)
  */
  public goToFavorite() {
    this.navCtrl.setRoot(FavoritesPage);
  }
}
