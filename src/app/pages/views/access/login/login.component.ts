import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserLogin } from 'src/app/models/loginUser';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public loginUser: UserLogin;

  constructor( private fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.loginUser = new UserLogin();
    this.formLogin = new FormGroup({});
  }

  ngOnInit(): void {
  }

  onSubmit() {

    if(this.loginUser.userName == null || this.loginUser.passWord == null) {
      console.log('Usuario o contraseña se encuentras vacios');
      return;
    }

    console.log(this.loginUser);
    this.authService.login(this.loginUser).subscribe(
      (resp) => {
        console.log(resp);

        this.authService.saveUser(resp.access_token);
        this.authService.saveToken(resp.access_token);

        this.router.navigate(['/pages/home/home-page']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
