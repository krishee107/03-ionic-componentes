import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menuList: Observable<Componente[]>;

  constructor(private dataService: DataService) {
    this.menuList = this.dataService.getMenuOpts();
  }

}
