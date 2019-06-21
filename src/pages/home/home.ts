import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecipeListingPage } from '../../pages/recipe-listing/recipe-listing';
import { DataManagementPage} from '../../pages/data-management/data-management';
import { FavoritesPage } from '../../pages/favorites/favorites';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Ingredient } from '../../data-model/ingredient';
import { IngredientService } from '../../service/IngredientService';
import { IngredientSelectionProvider } from '../../providers/ingredient-selection/ingredient-selection';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
  ourIngredientList$: Observable<Ingredient[]>;

  constructor(public navCtrl: NavController, 
    public ingredientSelection: IngredientSelectionProvider, 
    private ingredientService: IngredientService) {

    // get ingredient list from Firebase using ingredient service
    this.ourIngredientList$ = this.ingredientService.getIngredientList().snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        ));
  }

  /*
  * go to recipe listing page when user clicks on one main ingredient
  */
  public goToRecipeListing() {
    this.navCtrl.setRoot(RecipeListingPage);
  }

  /*
  * go to management page to add/update/delete ingredients and recipes (development stage only)
  */
  public goToDataManagementPage() {
    this.navCtrl.setRoot(DataManagementPage);
  }

  /*
  * go to favorite page when user clicks on the link underneath 'heart'
  */
  public goToFavorite() {
    this.navCtrl.setRoot(FavoritesPage);
  }
}