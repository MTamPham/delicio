
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Recipe } from '../../data-model/recipe';

// our unique key to manage our recipes
const STORAGE_KEY = 'favoriteRecipes';

/*
  Generated class for the FavoritesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritesProvider {

  constructor(public storage: Storage) {
    console.log('Hello FavoritesProvider Provider');
  }

  /*
  * check a recipe is favorited or not
  * params recipeObj: a recipe object needs to be checked
  */
  isFavorite(recipeObj : Recipe) {
    return this.getAllFavorites().then(result => {
      return result && result.findIndex(recipe => recipe.key === recipeObj.key) !== -1;
    });
  }
 
  /*
  * add a recipe to mobile storage with a unique key
  * params recipeObj: a recipe object needs to be removed
  */
  addFavorite(recipeObj : Recipe) {
    return this.getAllFavorites().then(result => {
      // if there are some recipes existing on mobile storage, push the new one to that list
      if (result) {
        result.push(recipeObj);
        return this.storage.set(STORAGE_KEY, result);
      } else { // if there is no recipe on mobile storage, set that recipe directly to mobile storage
        return this.storage.set(STORAGE_KEY, [recipeObj]);
      }
    });
  }
  
  /*
  * remove a recipe from mobile storage with a unique key
  * params recipeObj: a recipe object needs to be removed
  */
  removeFavorite(recipeObj : Recipe) {
    return this.getAllFavorites().then(result => {
      if (result) {
        var index = result.indexOf(recipeObj);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
  /*
  * get all favorite recipes in mobile storage with a unique key
  */
  getAllFavorites() {
    return this.storage.get(STORAGE_KEY);
  }
}
