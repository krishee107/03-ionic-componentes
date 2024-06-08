import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  fecha: Date = new Date();
  customPickerOptions = {
    buttons: [
      {
        text: "Hola",
        handler: (event: any) => {
          console.log(event);
        }
      },
      {
        text: "Mundo",
        handle: () => console.log("log!")
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }


  cambioFecha(event: any) {
    console.log(this.fecha);
    console.log(event);

  }
}
