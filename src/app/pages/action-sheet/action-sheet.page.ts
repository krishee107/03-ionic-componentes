import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }


  onClick() {
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      backdropDismiss: false, // Prevent closing the action sheet by clicking outside
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          data: {
            action: 'delete',
          },
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: 'share-outline',
          data: {
            action: 'share',
          },
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close-outline',
          data: {
            action: 'cancel',
          },
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ],
    });

    await actionSheet.present();
  }
}
