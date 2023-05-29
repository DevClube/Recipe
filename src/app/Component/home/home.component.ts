import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../../service/Recipe';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Categorie } from 'src/service/Categorie';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   public recipes: Recipe[] = [];
   private url = 'http://localhost:8080/recip';
   public cate: Categorie[] = [];
   private urlcate = 'http://localhost:8080/listCate';
  
  public ngOnInit():void {
    this.fetchRecipes();
    this.http.get<Categorie[]>(this.urlcate).subscribe((data: Categorie[]) => {
      this.cate = data;

    });


 }
  constructor(private http: HttpClient,private route: Router, private sanitizer: DomSanitizer) {
    
  }
  convertBlobToDataURL(blob: Blob): Observable<string> {
    return new Observable((observer) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        observer.next(reader.result as string);
        observer.complete();
      };
      reader.readAsDataURL(blob);
    });
  }
  fetchRecipes() {
    this.http.get<Recipe[]>(this.url).subscribe((data: Recipe[]) => {
      this.recipes = data;
      this.recipes.forEach(recipe => {
        if (recipe.imagerecipe) {
          const imageDataUrl = 'data:image/jpeg;base64,' + recipe.imagerecipe;
          recipe.imageDataUrl = this.sanitizer.bypassSecurityTrustUrl(imageDataUrl);
          console.log(recipe.imageDataUrl);
        }
      });
    });
  }
  
  

  NavigateToDetail(){
    this.route.navigate(["Recipedetail",]);
  }
}
