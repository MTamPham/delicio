import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Recipe } from '../../data-model/recipe';
import { RecipeService } from '../../service/RecipeService';

import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the EditRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage {

  recipeParameter: Recipe = {
    key: undefined,
    name: "",
    mainIngredient: undefined,
    ingredients: undefined,
    method: undefined,
    shortDescription: undefined,
    imageUrl: undefined
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipeService: RecipeService) {
  }

  ionViewDidLoad() {
  	this.recipeParameter = this.navParams.get('recipeRecord');
    console.log('ionViewDidLoad EditRecipePage');
  }

  /*
  * update an existing recipe from Firebase using recipe service
  */
  saveRecipeFromScreen(r: Recipe) {
  	this.recipeService.updateRecipe(r);
  	this.navCtrl.setRoot(HomePage);
  }

  /*
  * delete an existing recipe from Firebase using recipe service
  */
  deleteRecipeFromScreen(r: Recipe) {
  	this.recipeService.removeRecipe(r);
  	this.navCtrl.setRoot(HomePage);
  }

}
