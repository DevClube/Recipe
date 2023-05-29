import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HomeSlidComponent } from './Component/home-slid/home-slid.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { MaincontentComponent } from './Component/maincontent/maincontent.component';
import { CardrecipeComponent } from './Component/cardrecipe/cardrecipe.component';
import { VideosectionComponent } from './Component/videosection/videosection.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


  
@NgModule({

  
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomeSlidComponent,
    SidebarComponent,
    MaincontentComponent,
    CardrecipeComponent,
    VideosectionComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
