import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonList)
  ionList!: IonList;

  usuarios?: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }


  delete(user: any) {
    console.log('delete');
    console.log(user);
    this.ionList.closeSlidingItems();
  }
  favorite(user: any) {
    console.log('favorite');
    console.log(user);
    this.ionList.closeSlidingItems();
  }
  share(user: any) {
    console.log('share');
    console.log(user);
    this.ionList.closeSlidingItems();
  }
}
