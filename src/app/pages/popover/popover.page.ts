import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }


  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent, // Componente que se va a mostrar en el popover
      event: ev, // Esto es para que el popover se abra en la posición del evento
      translucent: true, // Esto hace que el fondo del popover sea transparente
      backdropDismiss: false // Esto evita que se cierre el popover al hacer clic fuera de él obligando a hacer clic en una de las opciones
    });

    await popover.present();

    const { data } = await popover.onWillDismiss(); // Obtenemos la data enviada desde el popover
    console.log(data);
  }
}
