import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Ingredient } from '../../data-model/ingredient';
import { IngredientService } from '../../service/IngredientService';
import { Recipe } from '../../data-model/Recipe';
import { RecipeService } from '../../service/RecipeService';
import { IngredientSelectionProvider } from '../../providers/ingredient-selection/ingredient-selection';

/**
 * Generated class for the AddRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-recipe',
  templateUrl: 'add-recipe.html',
})
export class AddRecipePage {

  // will hold data for the elements added to the form
  inputRowValues = [{}]

  ourIngredientList$: Observable<Ingredient[]>;

  recipeRecord: Recipe = {
    name: "",
    mainIngredient: undefined,
    ingredients: undefined,
    method: undefined,
    shortDescription: undefined,
    imageUrl: undefined
  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private recipeService: RecipeService,
    private ingredientService: IngredientService, 
    public ingredientSelection: IngredientSelectionProvider) { 

    // get ingredient list from Firebase using recipe service
    this.ourIngredientList$ = this.ingredientService.getIngredientList().snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        ));
  }

  /*
  * add a new recipe from form using recipe service
  */
  addRecipeFromScreen(r : Recipe) {

    // validate manually
    if (r.name === '' || r.name === undefined || r.name === null) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Please input the recipe name',
        buttons: ['Ok']
      });
      alert.present();
      return;
    }

    if (r.method === '' || r.method === undefined || r.method === null) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Please input the method',
        buttons: ['Ok']
      });
      alert.present();
      return;
    }

    this.recipeService.addRecipe(r);
    this.navCtrl.setRoot(HomePage);
  }
}
