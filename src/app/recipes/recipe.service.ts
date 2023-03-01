import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a test', 'https://www.theroastedroot.net/wp-content/uploads/2021/10/creamy-paleo-mushroom-chicken-7-720x1080.jpg.webp'),
    new Recipe('Test recipe', 'This is another test', 'https://www.theroastedroot.net/wp-content/uploads/2021/10/creamy-paleo-mushroom-chicken-7-720x1080.jpg.webp')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
