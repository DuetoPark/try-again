const productCarousel = tns({
  container: '.product-carousel .slider-list',
  navContainer: '.product-carousel .thumbnail-list',
  controls: false,
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: 'auto',
})

const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  controls: false,
  loop: false,
  navAsThumbnails: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: 'auto',
  gutter: 4,
  edgePadding: 16,
})

const userGalleryTablet = tns({
  container: '.user-gallery.is-tablet .slider-list',
  navContainer: '.user-gallery.is-tablet .thumbnail-list',
  controlsContainer: '.user-gallery.is-tablet .user-gallery-controls',
  loop: false,
  navAsThumbnails: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: 'auto',
  gutter: 6,
  edgePadding: 80,
})
