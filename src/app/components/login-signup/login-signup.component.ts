import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import { CookieServiceService } from '../../services/cookie-service.service';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.scss'
})
export class LoginSignupComponent {

  emailInput: string = ""
  passwordInput: string = ""

  constructor(private rest: ApiServiceService, private router: Router, private cookie:CookieServiceService) { }

  login() {
    let reqBody = {
      url: '/auth/login',
      params: {
        email: this.emailInput,
        password: this.passwordInput
      }
    }
    this.rest.login(reqBody).subscribe((res: any) => {
      this.cookie.saveTokens(res);
      this.router.navigate(['/dashboard']);
    }, (err) => {
      console.log(err);
    })

  }
}
