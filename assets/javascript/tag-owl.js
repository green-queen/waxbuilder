//Only load the tag carousel after the entire page loads because font rendering messes up the auto width
$(window).bind("load", function() {
  var tagOwl = $('#tag-carousel');
  tagOwl.owlCarousel({
    autoWidth:true,
    loop: true,
    margin: 30,
    items: 27,
    nav: false,
    dots: false
  });
});
