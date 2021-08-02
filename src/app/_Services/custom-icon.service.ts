import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }
  init() {

    this.matIconRegistry.addSvgIcon('lock_reset', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/lock-reset.svg'));
 }
}
