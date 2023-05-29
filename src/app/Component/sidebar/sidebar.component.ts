import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/service/Categorie';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  
  public cate: Categorie[] = [];
   private url = 'http://localhost:8080/listCategory';
   
   constructor(private http: HttpClient) {
    
   }
  ngOnInit(): void {
    this.http.get<Categorie[]>(this.url).subscribe((data: Categorie[]) => {
      this.cate = data;

    });

  }
}
