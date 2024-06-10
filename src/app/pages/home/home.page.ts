import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  componentes!: Observable<Componente[]>;

  constructor(private menuCtrl: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }


  // mostrarMenu() { // Funcion para mostrar el menu si no usamos el boton de menu imenubutton
  //   console.log('Mostrar menu');
  //   this.menuCtrl.open('first');
  // }

}
