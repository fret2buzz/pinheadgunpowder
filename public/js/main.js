import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';

let lightbox = null;

window.addEventListener('DOMContentLoaded', (event) => {
    lightbox = new PhotoSwipeLightbox({
      gallery: '.b-photo',
      children: '.b-photo-item',
      pswpModule: () => import('./photoswipe.esm.min.js')
    });

    lightbox.init();
});
