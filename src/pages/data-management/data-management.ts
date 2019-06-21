import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddRecipePage } from '../../pages/add-recipe/add-recipe';
import { AddIngredientPage } from '../../pages/add-ingredient/add-ingredient';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Recipe } from '../../data-model/recipe';
import { RecipeService } from '../../service/RecipeService';
/**
 * Generated class for the DataManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-management',
  templateUrl: 'data-management.html',
})
export class DataManagementPage {

  ourRecipeList$: Observable<Recipe[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private recipeService: RecipeService) {

    // get recipe list from Firebase using recipe service
    this.ourRecipeList$ = this.recipeService.getAllRecipeList().snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        ));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataManagementPage');
  }

  /*
  * go to add ingredient page
  */
  public goToAddIngredient() {
    this.navCtrl.push(AddIngredientPage);     
  }

  /*
  * go to add recipe page
  */
  public goToAddRecipe() {
    this.navCtrl.push(AddRecipePage);     
  }

}
