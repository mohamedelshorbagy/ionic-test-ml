import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TestPage } from '../test/test';
/**
 * Generated class for the DataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {

  posts:any;
  isAuthenticated: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthProvider) {
    this.isAuthenticated = false;
  }
  
  ionViewDidLoad() {
    this.isAuthenticated = false;
    console.log('ionViewDidLoad DataPage');
    this.auth.getPosts().subscribe(res => {
      this.posts = res;
    })

  }


  loginForm(data) {

    let result = this.auth.ifAuthenticated(data.value);
    if(result) {
      this.navCtrl.push(TestPage , {
        username: data.value.username
      });
    } else {
      this.isAuthenticated = true;
    }

  }

}
