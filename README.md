# Delicio (Former name: super-eze-recipes)
This is the project of the Mobile Application Development module. The application was written in TypeScript, HTML5, CSS3 and using Ionic and Angular framework.

## Script

In the project directory, you can run:

### `npm install`

Installs required libraries for starting the application. If it is not working, try the command `npm install --build-from-source`

### `ionic serve` or `ionic serve --lab`

Runs the app in the development mode.<br>
Open [http://localhost:8100](http://localhost:8100) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Project Workingflow

### Home Page

Home Page is the default page of the app, it shows all main ingredients there.

When a user select one ingredient, the app navigates to Recipe Listing page.

### Recipe Listing Page

In Recipe Listing Page, we show all recipes of the selected ingredient

When a user select one recipe, the app navigates to Recipe Detail Page.

### Recipe Detail Page

In Recipe Detail Page, we show all need ingredients to make the selected recipe along with the method to cook that recipe.

They are able to add that recipe to their favorites but it requires authentication

### Data Management (for Development stage only)

We can add more ingredient and recipe in Add Ingredient Page and Add Recipe Page.

We are also able to edit existing ingredient as well as existing recipe in Edit Ingredient Page and Edit Recipe Page

### Favorites Page

There is a function in our app which allows user add a recipe to their favorite list. The data will be stored in and retrieved from their device storage
