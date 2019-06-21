import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
 * A provider allows us to access the ingredient which is selected by user and make that data available to the other pages in the application
 */
@Injectable()
export class IngredientSelectionProvider {

    selectedIngredients : any[] = new Array();

  constructor(public http: HttpClient) {
    console.log('Hello IngredientSelectionProvider Provider');
  }

  /*
  * check whether an ingredient is selected or not
  * params ingredientObj: an ingredient object needs to be checked
  */
  public isIngredientSelectedByUser(ingredientObj) {
    if (this.selectedIngredients.indexOf(ingredientObj) < 0) {
      return false;
    } else {
      return true;
    }
  }
  
  /*
  * add an ingredient to our stored ingredient to use in other pages
  * params ingredientObj: an ingredient object needs to be added
  */
  public addIngredients(ingredientObj) {
    console.log("User selected " + ingredientObj);
    
    // in the current development, we allow a user selects only one ingredient at a time
    // for the future plan, a user might select more than one ingredient
    this.selectedIngredients[0] = ingredientObj;
  }

  /*
  * delete an ingredient from our stored ingredient
  * params ingredientObj: an ingredient object needs to be deleted
  */
  public deleteIngredient(ingredientObj) {
    let index = this.selectedIngredients.indexOf(ingredientObj, 0);
    
    if (index > -1) {
       this.selectedIngredients.splice(index, 1);
  
    }
  }

  /*
  * get selected ingredient from our stored variable
  */
  public getUserSelectedIngredients() {
    return this.selectedIngredients;
  }
}
