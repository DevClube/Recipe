import { SafeUrl } from "@angular/platform-browser";
import { Categorie } from "./Categorie";
import { Commentaire } from "./Commantaire";
import { Ingerdient } from "./Ingredient";

export interface Recipe{
    idrecipe?: number;
    nomrecipe?: string;
    imagerecipe?:number[];
    imageDataUrl?:SafeUrl;
    nb_person?:number;
    tempsCuisson?:number;
    description?:string;
    //catergories?:Categorie;
    ingredients?:Ingerdient[];
    //commentaire?:Commentaire;

    

}