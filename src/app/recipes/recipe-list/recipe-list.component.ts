import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a test', 'https://www.theroastedroot.net/wp-content/uploads/2021/10/creamy-paleo-mushroom-chicken-7-720x1080.jpg.webp'),
    new Recipe('Test recipe', 'This is another test', 'https://www.theroastedroot.net/wp-content/uploads/2021/10/creamy-paleo-mushroom-chicken-7-720x1080.jpg.webp')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected (recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }


}
