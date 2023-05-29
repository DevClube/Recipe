import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  routeSubscription: any;
  activatedRoute: any;
  isLoggedIn: Boolean = false;
  id: any;

  ngOnInit() {

    
      
      // You can set the value to a component property if needed
      // this.id = id;
      // this.isLoggedIn = isLoggedIn;
    }
}

  

