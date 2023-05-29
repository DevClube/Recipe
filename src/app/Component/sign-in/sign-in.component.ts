import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/service/User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  forme!: FormGroup ;
  private user: User ={
    nomUtilisateur:'',
    prenomUtilisateur:'',
    loginUtilisateur:'',
    mailUtilisateur :'',
    passUtilisateur:'',

  };
  isLoggedIn = false;
formvalidation(){
    this.forme = this.formBuilder.group({
      mailUtilisateur: ['', [Validators.required]],
      passUtilisateur: ['', Validators.required],
      

    });
  }
  ngOnInit() {
    this.formvalidation();
    
  }
  


  onSubmit() {
    const url = 'http://localhost:8080/user/login';
    if (this.forme.valid) {
      this.user = {
        mailUtilisateur: this.forme.value.mailUtilisateur,
        passUtilisateur: this.forme.value.passUtilisateur,
      };
  
      
  
      this.http.post<User>(url, this.user).subscribe(
        (response) => {
          console.log('Response', response);
          // Handle the response here if needed
          this.isLoggedIn = true;
          // Navigate to the home screen with user ID as a parameter
          this.router.navigate([''], { queryParams: { id: response.idUtilisateur, log: this.isLoggedIn } });
          console.log("login ::: " + this.isLoggedIn)
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



    //////////////////////////::
   
  }
  
  

  
  constructor(private http:HttpClient,private formBuilder: FormBuilder,  private router: Router){}


  




}
