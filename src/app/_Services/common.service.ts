import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private sanitizer: DomSanitizer, public alertController: AlertController, public toastController: ToastController) { }

  async presentAlert(header: string, msg: string) {

    this.alertController.create({
      cssClass: 'my-custom-class',
      message: msg,
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  async presentToast(msg: string,) {
    const toast = await this.toastController.create({
      message: msg,
      position: 'bottom',
      animated: true,
      mode: 'md',
      translucent: true,
      duration: 3000,
      cssClass: 'customToast text-center'
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  getFirstTwoLetters = name => {
    let initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    return initials;
  };


 doTrimByLength(text, length) {
    const incomingText = text;
    const textlength = incomingText.length;
    if (textlength > length) {
      const temp = incomingText.substring(0, length);
      const spaceLoc = temp.lastIndexOf(' ');
      const temp2 = incomingText.substring(0, spaceLoc).concat('...');
      return temp2;
    } else {
      return text;
    }
  }
}
