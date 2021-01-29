import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniatureGalleryComponent } from './miniature-gallery/miniature-gallery.component';
import { IvyGalleryModule } from 'angular-gallery';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [
    AppComponent,
    MiniatureGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyGalleryModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
