import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';

@Component({
  selector: 'app-miniature-gallery',
  templateUrl: './miniature-gallery.component.html',
  styleUrls: ['./miniature-gallery.component.scss']
})
export class MiniatureGalleryComponent implements OnInit {

  constructor(private gallery: Gallery) { }

  ngOnInit(): void {
  }

  showGallery(index: number) {
    let prop = {
      images: [
        { path: 'https://github.com/Gundulin/gallery/blob/master/src/assets/DG_pfp_100.jpg' }, 
      ],
      index
    };
    this.gallery.load(prop);
  }

}
