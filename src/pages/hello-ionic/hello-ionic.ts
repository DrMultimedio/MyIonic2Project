import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MipaginaPage } from '../mipagina/mipagina';
import { UbicacionPage } from '../pages/ubicacion/ubicacion';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  constructor(public navCtrl: NavController) {
    
  }


  navigate(){
  	alert("patatas con queso, pallaso");
}

}
