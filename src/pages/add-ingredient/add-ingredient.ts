import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { Ingredient } from '../../data-model/ingredient';
import { IngredientService } from '../../service/IngredientService';
/**
 * Generated class for the AddIngredientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-ingredient',
  templateUrl: 'add-ingredient.html',
})
export class AddIngredientPage {

  ingredientRecord: Ingredient = {
  	name: "",
    imageUrl: ""
  }

  constructor(public navCtrl: NavController, private ingredientService: IngredientService, public alertCtrl: AlertController) {
  }

  /*
  * add a new ingredient from form into Firebase using ingredient service
  */
  addIngredientFromScreen(i : Ingredient) {
    // validate manually
    if (i.name === '' || i.name === undefined || i.name === null) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Please input the ingredient name',
        buttons: ['Ok']
      });
      alert.present();
      return;
    }

  	this.ingredientService.addIngredient(i);
  	this.navCtrl.setRoot(HomePage)
  }
}
