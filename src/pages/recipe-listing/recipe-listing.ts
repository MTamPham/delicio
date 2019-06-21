import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase} from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { Ingredient } from '../../data-model/ingredient';
import { Recipe } from '../../data-model/recipe';
import { RecipeService } from '../../service/RecipeService';

import { HomePage } from '../../pages/home/home';
import { RecipeDetailPage } from '../../pages/recipe-detail/recipe-detail';

import { IngredientSelectionProvider } from '../../providers/ingredient-selection/ingredient-selection';

/**
 * Generated class for the RecipeListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-listing',
  templateUrl: 'recipe-listing.html',
})
export class RecipeListingPage {

  ourRecipeList$: Observable<Recipe[]>;
  userSelectedIngredient: Ingredient;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public ingredientSelection: IngredientSelectionProvider, 
  	private recipeService: RecipeService) {

    //only get the first item since we only allow a user select one main ingredient at a time
    this.userSelectedIngredient = ingredientSelection.getUserSelectedIngredients()[0];

    // make sure that user selected main ingredient
    if (this.isNotEmpty(this.userSelectedIngredient)) {
      console.log("User selected " + this.userSelectedIngredient.key + " - " + this.userSelectedIngredient.name);

      this.ourRecipeList$ = this.recipeService.getRecipeList(this.userSelectedIngredient.key).snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        ));
    }
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
  * go back to home page
  */
  public goToHome() {
    this.navCtrl.setRoot(HomePage);
  }

  /*
  * go to recipe detail page when user clicks a recipe
  */
  public goToRecipeDetail(selectedRecipe : Recipe) {
    this.navCtrl.setRoot(RecipeDetailPage, {ingredientRecord: this.userSelectedIngredient, recipeRecord: selectedRecipe});
  }
}