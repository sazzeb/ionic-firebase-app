import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user'

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  newuser = {
    displayName: '',
    email: '',
    password: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
   }

  signup(){
    var toaster = this.toastCtrl.create({
      message: 'Big fat erro guy',
      duration: 3000,
      position: 'bottom'
    })
    if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.displayName == ''){
      toaster.setMessage('All field are required to be filled')
      toaster.present()
    }
    else if (this.newuser.password.length < 7 ) {
      toaster.setMessage('The password field is week, password must be atleast 7')
      toaster.present();
    }
    else{
      let laoder = this.loadingCtrl.create({
        content: 'Please wait..'
      });
      laoder.present();
      this.userservice.adduser(this.newuser).then((res: any) =>{
        laoder.dismiss();
        if (res.success)
          this.navCtrl.push('ProfilepicPage');
          else{
            alert('alert' + res);
          }
      })
    }
  }
  goback(){
    this.navCtrl.setRoot('LoginPage');
  }

}
