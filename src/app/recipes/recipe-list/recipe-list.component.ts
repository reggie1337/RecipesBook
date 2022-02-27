import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('tester recipe', 'this is only a test','https://www.pinterest.com/pin/231091024600867036/')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
