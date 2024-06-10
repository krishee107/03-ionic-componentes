import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {
  items = Array(40);

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() { }

  onClick(i: number) {
    console.log('Item:', i);
    this.popoverCtrl.dismiss({ // Cerramos el popover y enviamos el item seleccionado
      item: i
    });
  }

}
