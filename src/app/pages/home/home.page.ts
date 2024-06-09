import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/buttons'
    },
    {
      icon: 'card-outline',
      name: 'card',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar-outline',
      name: 'Datetime',
      redirectTo: '/date-time'
    }, {
      icon: 'car-outline',
      name: 'fab',
      redirectTo: '/fab'
    }, {
      icon: 'grid-outline',
      name: 'grid',
      redirectTo: '/grid'
    }, {
      icon: 'infinite-outline',
      name: 'infinite',
      redirectTo: '/infinite'
    },
    {
      icon: 'hammer-outline',
      name: 'Input',
      redirectTo: '/input'
    },
    {
      icon: 'list-outline',
      name: 'List',
      redirectTo: '/list'
    },
    {
      icon: 'reorder-four-outline',
      name: 'List Reorder',
      redirectTo: '/list-reorder'
    },
    {
      icon: 'refresh-circle-outline',
      name: 'Loading',
      redirectTo: '/loading'
    },
    {
      icon: 'swap-vertical',
      name: 'Modal',
      redirectTo: '/modal'
    },
    {
      icon: 'push-outline',
      name: 'Popover',
      redirectTo: '/popover'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
