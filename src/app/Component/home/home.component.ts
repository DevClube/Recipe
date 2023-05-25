import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../../service/Recipe';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: any;
   private url = 'http://localhost:8080/car';
  
  public ngOnInit():void {
    this.fetchRecipes();
 }
  constructor(private http: HttpClient) {}

  fetchRecipes() {
    this.http.get<Recipe[]>(this.url)
      .subscribe((data: Recipe[]) => {
        this.recipes = data;
      });
  }

}
