const commonOptions = {
  navAsThumbnails: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: 'auto',
}

const productCarousel = tns({
  ...commonOptions,
  container: '.product-carousel .slider-list',
  navContainer: '.product-carousel .thumbnail-list',
  controls: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
})

const userGalleryMobile = tns({
  ...commonOptions,
  container: '.user-gallery.is-mobile .slider-list',
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  controls: false,
  loop: false,
  gutter: 4,
  edgePadding: 16,
})

const userGalleryTablet = tns({
  ...commonOptions,
  container: '.user-gallery.is-tablet .slider-list',
  navContainer: '.user-gallery.is-tablet .thumbnail-list',
  controlsContainer: '.user-gallery.is-tablet .user-gallery-controls',
  loop: false,
  gutter: 6,
  edgePadding: 80,
})
