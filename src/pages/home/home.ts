import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:string;
  constructor(public navCtrl: NavController) {

  }


  goToAbout() {

    this.navCtrl.push(AboutPage);
  }



}
