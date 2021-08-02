import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgOtpInputModule } from 'ng-otp-input';

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgOtpInputModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  exports: [
    NgxMaskModule,
    NgOtpInputModule
  ],
})
export class SharedModule { }
