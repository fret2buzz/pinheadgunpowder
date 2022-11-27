import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';

let lightbox = null;

window.addEventListener('DOMContentLoaded', (event) => {
    const sticky = document.getElementById('sticky');
    let observer = new IntersectionObserver(([entry]) => toggleStickyState(entry), {
        threshold: 1,
        rootMargin: '-82px 0px 0px 0px'
    });
    observer.observe(sticky);

    function toggleStickyState(entry) {
        document.body.classList.toggle('m-stuck', entry.intersectionRatio < 1);
    }

    lightbox = new PhotoSwipeLightbox({
      gallery: '.b-photo',
      children: '.b-photo-item',
      pswpModule: () => import('./photoswipe.esm.min.js')
    });

    lightbox.init();
});
