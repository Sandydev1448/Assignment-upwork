import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, AlertController,NavController  } from '@ionic/angular';
import { REGEX } from 'src/app/utils';
import { CommonService, AuthService,StorageService } from 'src/app/_services';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  appVersion: any = environment.appVersion;
  isLoggingIn = false;
  isSubmitted = false;
  hide = true;   //password show

  // eslint-disable-next-line max-len
  constructor(private formBuilder: FormBuilder,public router: Router,public toastController: ToastController,public storage: StorageService,public commonService: CommonService,private alertController: AlertController,public auth: AuthService,private navCtrl: NavController,private location: Location) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(null, Validators.compose([Validators.required])),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    });
  }

  get formCheck() {
    return this.loginForm.controls;
  }

  async tryLogin() {
    this.isLoggingIn = true;
    this.isSubmitted = true;
    if(!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    this.navCtrl.navigateRoot('/tabs/tabs/tab1', { animationDirection: 'forward' });
  }

  ionViewDidEnter(){

  }
}
