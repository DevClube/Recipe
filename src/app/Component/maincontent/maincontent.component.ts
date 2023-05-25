import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../../service/Recipe';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent  implements OnInit {
  
  recipes: Recipe[] = [];
  
  ngOnInit() {
    this.fetchRecipes();
  }
  constructor(private http: HttpClient) {}

  fetchRecipes() {
    this.http.get<Recipe[]>('data.json')
      .subscribe((data: Recipe[]) => {
        this.recipes = data;
      });
  }

}
