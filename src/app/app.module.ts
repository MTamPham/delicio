import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecipeListingPage } from '../pages/recipe-listing/recipe-listing';
import { RecipeDetailPage } from '../pages/recipe-detail/recipe-detail';
import { AddRecipePage } from '../pages/add-recipe/add-recipe';
import { AddIngredientPage } from '../pages/add-ingredient/add-ingredient';
import { EditRecipePage } from '../pages/edit-recipe/edit-recipe';
import { DataManagementPage } from '../pages/data-management/data-management';
import { FavoritesPage } from '../pages/favorites/favorites';

import { IngredientSelectionProvider } from '../providers/ingredient-selection/ingredient-selection';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebase_environment } from '../environments/environment';

import { IngredientService } from '../service/IngredientService';
import { RecipeService } from '../service/RecipeService';
import { FavoritesProvider } from '../providers/favorites/favorites';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipeListingPage,
    RecipeDetailPage,
    AddRecipePage,
    AddIngredientPage,
    EditRecipePage,
    DataManagementPage,
    FavoritesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebase_environment),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecipeListingPage,
    RecipeDetailPage,
    AddRecipePage,
    AddIngredientPage,
    EditRecipePage,
    DataManagementPage,
    FavoritesPage
  ],
  providers: [
   StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IngredientSelectionProvider,
    IngredientService,
    RecipeService,
    FavoritesProvider,
  ]
})
export class AppModule {}
