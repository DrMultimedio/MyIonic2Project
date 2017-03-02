import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MipaginaPage } from '../mipagina/mipagina';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

/*
  Generated class for the Inicio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
  navigate(){
    this.navCtrl.push(HelloIonicPage,{
        firstPassed: "value1",
        secondPassed: "value2"
    })
}
}
