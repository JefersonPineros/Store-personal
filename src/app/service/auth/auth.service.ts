import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/models/loginUser';
import { User } from 'src/app/models/user/user';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: User;
  private _token: string;

  constructor(private httpClient: HttpClient) { }

  public login(user: UserLogin): Observable<any> {
    const urlEndpoint = 'http://localhost:8080/oauth/token';

    const credenciales = btoa('angularapp'+':'+'123456');

    const header = new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + credenciales
        }
      );

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', user.userName);
    params.set('password', user.passWord);
    console.log(params.toString());
    
    return this.httpClient.post<any>( urlEndpoint, params.toString(), {headers: header});
  }

  public saveUser(accessToken: string): void {
    
    this._user = new User();
  }

  public saveToken(accessToken: string): void {

  }
}
