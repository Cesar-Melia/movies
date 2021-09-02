import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ImgPipe } from './pipes/img.pipe';
import { LanguagePipe } from './pipes/language.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [ImgPipe, LanguagePipe, CapitalizePipe],
  imports: [CommonModule, HttpClientModule],
  exports: [ImgPipe, LanguagePipe, CapitalizePipe],
})
export class SharedModule {}
