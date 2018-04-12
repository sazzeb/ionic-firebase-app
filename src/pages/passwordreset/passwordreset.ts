import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the PasswordresetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
})
export class PasswordresetPage {
  email: string
  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider,
    public alertctrl: AlertController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PasswordresetPage');
  }

  reset(){
    let alert = this.alertctrl.create({
      buttons: ['ok']
    })
    this.userservice.passwordreset(this.email).then((res: any) =>{
      if (res.success){
        alert.setTitle('Email Sent')
        alert.setSubTitle('Please follow the instruction sent to'+ this.email+ 'to set your password')
      }
      else{
        alert.setTitle('Email not valid, password reset failed')
      }
    })
  }

  goback(){
    this.navCtrl.setRoot('LoginPage');
  }

}
