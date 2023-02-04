import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a test', 'https://www.theroastedroot.net/wp-content/uploads/2021/10/creamy-paleo-mushroom-chicken-7-720x1080.jpg.webp')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
