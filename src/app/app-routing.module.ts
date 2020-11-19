import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiniatureGalleryComponent } from './miniature-gallery/miniature-gallery.component';

const routes: Routes = [
  { path: 'miniature-gallery', component: MiniatureGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
