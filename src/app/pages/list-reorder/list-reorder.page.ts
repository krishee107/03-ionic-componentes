import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { IonReorderGroupCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'];

  constructor() { }

  ngOnInit() {
  }



  doReorder($event: IonReorderGroupCustomEvent<ItemReorderEventDetail>) {
    console.log($event);
    const itemMover = this.personajes.splice($event.detail.from, 1)[0];
    this.personajes.splice($event.detail.to, 0, itemMover);

    $event.detail.complete();

    console.log(this.personajes);
  }

  toggleReorder() {
    const reorderGroup = document.querySelector('ion-reorder-group');
    if (reorderGroup) {
      reorderGroup.disabled = !reorderGroup.disabled;
    }
  }
}
