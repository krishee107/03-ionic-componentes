import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  data: any[] = Array(20);

  @ViewChild(IonInfiniteScroll)
  infiniteScroll!: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any) {
    console.log(event);
    setTimeout(() => {
      if (this.data.length > 50) {
        // event.target.complete(); -> Esto completa el infinite scroll
        this.infiniteScroll.complete(); // Esto es lo mismo que la línea anterior pero con la propiedad ViewChild
        event.target.disabled = true; // Esto deshabilita el infinite scroll
        return;
      }


      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      event.target.complete();
    }, 1500);
  }

}
