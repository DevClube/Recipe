import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Routes, RouterModule, Router, ActivatedRoute  } from '@angular/router';
import { Recipe } from 'src/service/Recipe';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./main.css']
})
export class RecipedetailComponent implements OnInit{

  id:string = '';
  recipe : Recipe = {} ;
  loading: boolean = true;
  error: string = '';


  ngOnInit(){
    this.route.params.subscribe(params => {
       this.id = params['id'];
      // Use the ID as needed
      console.log(this.id);
    });
   
  
    this.http.get<Recipe>( 'http://localhost:8080/recip/'+this.id)
      .subscribe(
        (data: Recipe) => {
          this.recipe = data;
          if (this.recipe.imagerecipe) {
            const imageDataUrl = 'data:image/jpeg;base64,' + this.recipe.imagerecipe;
            this.recipe.imageDataUrl = this.sanitizer.bypassSecurityTrustUrl(imageDataUrl);
            console.log(this.recipe.imageDataUrl);
          }
          console.log("this id "+this.id);
          console.log("this id number "+this.id);
          console.log("this name "+this.recipe.nomrecipe);
        },
        (error: any) => {
          console.error('Error fetching recipe:', error);
        
      

      });
  }
  constructor(private route: ActivatedRoute ,private http:HttpClient, private sanitizer: DomSanitizer) { }



  
}
