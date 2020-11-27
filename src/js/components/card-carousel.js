var slider = tns({
  container: '.card-carousel',
  autoplay: true,
  gutter: 32,
  nav: false,
  controls: false,
  autoplayButtonOutput: false,
  items: 1,
  edgePadding: 48,
  responsive: {
    1024: {
      items: 4,
      edgePadding: 80,
    },
  },
});
