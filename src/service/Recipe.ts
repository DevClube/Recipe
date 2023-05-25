import { Categorie } from "./Categorie";
import { Commentaire } from "./Commantaire";
import { Ingerdient } from "./Ingredient";

export interface Recipe{
    idrecipe: number;
    nomrecipe: string;
    imagerecipe:string;
    etapePreparation:number;
    tempCuisson:number;
    catergories:Categorie;
    ingredients:Ingerdient[];
    commentaire:Commentaire;

    

}