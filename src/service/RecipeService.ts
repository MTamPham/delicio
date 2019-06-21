import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Recipe } from '../data-model/Recipe';

/**
 * Service to deal with recipes
 */
@Injectable()
export class RecipeService {

    private recipesRef = this.db.list<Recipe>('recipes', ref => ref.orderByChild('name'));

    constructor(private db: AngularFireDatabase) { 

    }

    /*
    * get all recipes from Firebase
    */
    // 
    getAllRecipeList() {
        return this.recipesRef;
    }

    /*
    * get all recipes from Firebase
    * params mainIngredientKey: a main ingredient key which is referenced by recipes
    */
    getRecipeList(mainIngredientKey: any) {
        this.recipesRef = this.db.list<Recipe>('recipes', ref => ref.orderByChild('mainIngredient').equalTo(mainIngredientKey));
        return this.recipesRef;
    }

    /*
    * add a new recipe
    * params dataRecipe: a recipe object needs to added
    */ 
    addRecipe(dataRecipe: Recipe) {
        return this.recipesRef.push(dataRecipe);
    }

    /*
    * update an existing recipe
    * params dataRecipe: a recipe object needs to updated
    */
    updateRecipe(dataRecipe: Recipe) {
        return this.recipesRef.update(dataRecipe.key, dataRecipe);
    }

    /*
    * delete a recipe
    * params dataRecipe: a recipe object needs to deleted
    */
    removeRecipe(dataRecipe: Recipe) {
        return this.recipesRef.remove(dataRecipe.key);
    }

    /*
    * delete a recipe
    * params k: a key of a recipe in Firebase
    */
    removeRecipeByKey(k: string) {
        return this.recipesRef.remove(k);
    }
}