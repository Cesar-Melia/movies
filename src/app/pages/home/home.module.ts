import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { MovieItemComponent } from './components/movie-item/movie-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CoreModule,
    SharedModule,
  ],
  declarations: [HomePage, MovieItemComponent],
})
export class HomePageModule {}
