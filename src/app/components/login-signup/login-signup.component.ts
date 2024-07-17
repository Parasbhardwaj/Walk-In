import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.scss'
})
export class LoginSignupComponent {

  emailInput:string = ""
  passwordInput:string = ""

  constructor(private rest: ApiServiceService, private router:Router){}

  login(){
    let reqBody = {
      url: '/auth/login',
      params: {
        email: this.emailInput,
        password: this.passwordInput
      }
    }
    this.rest.login(reqBody).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/dashboard")
      
    },(err)=>{
      console.log(err);
      
    })
    
  }
}
