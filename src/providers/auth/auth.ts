import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }


  getPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }


  ifAuthenticated(data) {
    let respond = {
      status: 200,
      token: "kalushdiashdiasd5648644asdaklsjdnaskldn",
      flag: true 
    }
    if(data.username == "Mohamed") {
      return true;
    } else {
      return false;
    }

  }

}




