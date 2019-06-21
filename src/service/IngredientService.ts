import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Ingredient } from '../data-model/ingredient';

/**
 * Service to deal with ingredients
 */
@Injectable()
export class IngredientService {

    private ingredientsRef = this.db.list<Ingredient>('ingredients', ref => ref.orderByChild('name'));

    constructor(private db: AngularFireDatabase) { 

    }

    /*
    * get all ingredients from Firebase
    */
    getIngredientList() {
        return this.ingredientsRef;
    }

    /*
    * add a new ingredient to Firebase
    * params dataIngredient: an ingredient object needs to be added
    */
    addIngredient(dataIngredient: Ingredient) {
        return this.ingredientsRef.push(dataIngredient);
    }

    /*
    * update an existing ingredient from Firebase
    * params dataIngredient: an ingredient object needs to be updated
    */
    updateIngredient(dataIngredient: Ingredient) {
        return this.ingredientsRef.update(dataIngredient.key, dataIngredient);
    }

    /*
    * delete an ingredient from Firebase
    * params dataIngredient: an ingredient object needs to be deleted
    */
    removeIngredient(dataIngredient: Ingredient) {
        return this.ingredientsRef.remove(dataIngredient.key);
    }

    /*
    * delete an ingredient from Firebase
    * params k: a key of a recipe in Firebase
    */
    removeIngredientByKey(k: string) {
        return this.ingredientsRef.remove(k);
    }
}