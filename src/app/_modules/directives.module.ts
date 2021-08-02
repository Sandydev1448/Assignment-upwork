import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericOnlyDirective, AlphaNumericDirective, NumbersWithDecimalDirective, UppercaseDirective } from '../_directives';



const CUSTOM_DIRECTIVES = [
  NumericOnlyDirective,
  AlphaNumericDirective,
  NumbersWithDecimalDirective,
  UppercaseDirective
];

@NgModule({
  declarations: [CUSTOM_DIRECTIVES],
  imports: [
    CommonModule
  ],
  exports: [CUSTOM_DIRECTIVES],
})
export class DirectivesModule { }
