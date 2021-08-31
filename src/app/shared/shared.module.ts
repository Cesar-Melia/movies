import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ImgPipe } from './pipes/img.pipe';

@NgModule({
  declarations: [ImgPipe],
  imports: [CommonModule, HttpClientModule],
  exports: [ImgPipe],
})
export class SharedModule {}
