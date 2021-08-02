import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_modules';
import { LogoComponent } from './logo/logo.component';
import { MatIconRegistry } from '@angular/material/icon';

const PAGES_COMPONENTS = [
  LogoComponent
];

@NgModule({
  declarations: [
    ...PAGES_COMPONENTS
  ],
  imports: [
    CommonModule, MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ...PAGES_COMPONENTS
  ],
})
export class ComponentsModule { }


