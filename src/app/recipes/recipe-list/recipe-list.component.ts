import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('Pizza Recipe', 'Description for Pizza', 'https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/6:9/w_1630,h_2445,c_limit/BA-Perfect-Pizza.jpg'),
    new Recipe('Shnitzel Recipe', 'Description for Shnitzel', 'https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/1:1/w_1920,c_limit/chicken-schnitzel.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
