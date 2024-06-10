import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Fernando',
        pais: 'España'
      }
    });

    await modal.present();

    const resp = await modal.onDidDismiss(); //Esperar a que el modal se cierre para obtener la informacion cuando el modal se cierra
    console.log('OnDidDismiss', resp);

    // const resp = await modal.onWillDismiss(); //La informacion se obtiene antes de que el modal se cierre
  }
}
