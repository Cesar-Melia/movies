import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ImgPipe } from './pipes/img.pipe';
import { LanguagePipe } from './pipes/language.pipe';

@NgModule({
  declarations: [ImgPipe, LanguagePipe],
  imports: [CommonModule, HttpClientModule],
  exports: [ImgPipe, LanguagePipe],
})
export class SharedModule {}
