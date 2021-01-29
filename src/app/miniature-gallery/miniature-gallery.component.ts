import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-miniature-gallery',
  templateUrl: './miniature-gallery.component.html',
  styleUrls: ['./miniature-gallery.component.scss']
})
export class MiniatureGalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private gallery: Gallery) { }

  ngOnInit(): void {
  }

  showGallery(index: number) {
    let prop = {
      images: [
        { path: '../assets/DG_pfp.jpg' }, 
      ],
      index
    };
    this.gallery.load(prop);
  }

}
