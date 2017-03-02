import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MipaginaPage } from '../mipagina/mipagina';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  constructor(public navCtrl: NavController) {
    
  }


  navigate(){
    this.navCtrl.push(MipaginaPage,{
        firstPassed: "value1",
        secondPassed: "value2"
    })
}

}
