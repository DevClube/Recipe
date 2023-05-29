import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/service/User';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  forme!: FormGroup ;
  private user: User ={
    nomUtilisateur:'',
    prenomUtilisateur:'',
    loginUtilisateur:'',
    mailUtilisateur :'',
    passUtilisateur:'',

  };
formvalidation(){
    this.forme = this.formBuilder.group({
      nomUtilisateur: ['', Validators.required],
      prenomUtilisateur: ['', Validators.required],
      loginUtilisateur: ['', Validators.required],
      mailUtilisateur: ['', [Validators.required,Validators.email]],
      passUtilisateur: ['', Validators.required],
      

    });
  }
  ngOnInit() {
    this.formvalidation();
    
  }
  


  onSubmit() {
    if (this.forme.valid) {
       this.user = {
        nomUtilisateur: this.forme.value.nomUtilisateur,
        prenomUtilisateur: this.forme.value.prenomUtilisateur,
        loginUtilisateur: this.forme.value.loginUtilisateur,
        mailUtilisateur: this.forme.value.mailUtilisateur,
        passUtilisateur: this.forme.value.passUtilisateur,
      };
      console.log('user', this.user);
  
      const url = 'http://localhost:8080/user/save';
  
      this.http.post<User>(url, this.user).subscribe(
        (response) => {
          console.log('Response', response);
          // Handle the response here if needed

          this.router.navigate([''], { queryParams: { id: response.idUtilisateur } });
        },
        (error) => {
          console.error('Error', error);
          // Handle the error here if needed
        }
      );
    } else {
      console.error('Form is invalid');
      // Handle the case where the form is not valid
    }
  }
  

  
  constructor(private http:HttpClient,private formBuilder: FormBuilder,  private router: Router){}


  




}
